import { Flex, ActionIcon, Textarea, Avatar, Anchor, Box } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import avatar from "../../../shared/images/avatar.png";
import useNewsStore from "../../../data/stores/useNewsStore";
import { useShallow } from "zustand/react/shallow";
import useIdeasStore from "../../../data/stores/useIdeasStore";
import { notifications } from "@mantine/notifications";
import {
  useForm,
  isNotEmpty,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import classes from "./commentsForm.module.css";

const author = "Заворин Сергей Сергеевич";

function CommentsForm({ id, from }) {
  const { postComm } =
    from === "news"
      ? useNewsStore(
          useShallow((state) => ({
            postComm: state.postComm,
          }))
        )
      : useIdeasStore(
          useShallow((state) => ({
            postComm: state.postComm,
          }))
        );

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      comment: "",
    },
    validate: {
      comment: isNotEmpty("Комментарий не может быть пустым"),
    },
  });

  const handleError = (errors) => {
    if (errors.comment) {
      notifications.show({
        title: "Ошибка",
        message: "Пустой комментарий",
        color: "red",
        classNames: classes,
      });
    }
  };

  const [text, setText] = useState("");
  return (
    <Flex gap="xs" pb={20}>
      <Anchor
        component={NavLink}
        to="/profile"
        onClick={() => {
          scrollToTop();
        }}
        c="dark"
      >
        <Avatar src={avatar} alt="avatar" radius="xl" />
      </Anchor>
      <Box
        w="100%"
        component="form"
        onSubmit={form.onSubmit((values) => {
          const comment = values.comment.trim();
          postComm(id, avatar, author, comment);
          notifications.show({
            message: "Комментарий опубликован",
            classNames: classes,
          });
          form.reset();
          setText("");
        }, handleError)}
      >
        <Textarea
          radius="sm"
          size="md"
          autosize
          w="100%"
          placeholder="Напишите комментарий..."
          rightSectionWidth={text ? 96 : 64}
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          minRows={2}
          maxRows={5}
          rightSectionPointerEvents="all"
          {...form.getInputProps("comment")}
          // onKeyDown={(event) => {
          //   if (event.key === "Enter" && !event.shiftKey) {
          //     event.preventDefault();
          //     // const date = new Date().toISOString();
          //     postComm(id, avatar, author, text);
          //     setText("");
          //   }
          // }}
          rightSection={
            <Flex>
              <ActionIcon
                size={32}
                color="gray"
                variant="transparent"
                onClick={() => {
                  form.reset();
                  setText("");
                }}
                style={{ display: text ? undefined : "none" }}
              >
                <Icons.CloseButton />
              </ActionIcon>
              <ActionIcon type="submit" size={32} radius="xl" variant="filled">
                <Icons.IconArrowRight />
              </ActionIcon>
            </Flex>
          }
        />
      </Box>
    </Flex>
  );
}

export default CommentsForm;
