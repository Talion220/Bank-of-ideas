import { Flex, ActionIcon, Textarea, Avatar, Anchor } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import avatar from "../../../shared/images/avatar.png";
import { postComment } from "../../../api/news/news";
import useNewsStore from "../../../data/stores/useNewsStore";

const author = "Иванов Иван Иванович";

function CommentsForm({ id }) {
  const { getData } = useNewsStore((state) => ({
    getData: state.getData,
  }));
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
      <Textarea
        radius="sm"
        size="md"
        autosize
        w="100%"
        placeholder="Напишите комментарий..."
        rightSectionWidth={text ? 96 : 64}
        value={text}
        minRows={2}
        maxRows={5}
        rightSectionPointerEvents="all"
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
        rightSection={
          <Flex>
            <ActionIcon
              size={32}
              color="gray"
              variant="transparent"
              onClick={() => {
                setText("");
              }}
              style={{ display: text ? undefined : "none" }}
            >
              <Icons.CloseButton />
            </ActionIcon>
            <ActionIcon
              size={32}
              radius="xl"
              variant="filled"
              onClick={() => {
                const date = new Date().toISOString();
                postComment({ id, avatar, author, text, date }).then((res) =>
                  getData(id)
                );
                setText("");
              }}
            >
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />
    </Flex>
  );
}

export default CommentsForm;
