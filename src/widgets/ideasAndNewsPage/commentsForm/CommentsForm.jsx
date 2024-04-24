import { Flex, ActionIcon, Textarea, Avatar, Anchor } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import avatar from "../../../shared/images/avatar.png";

function CommentsForm() {
  const [clear, setClear] = useState("");
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
        rightSectionWidth={clear ? 96 : 64}
        value={clear}
        minRows={2}
        maxRows={5}
        rightSectionPointerEvents="all"
        onChange={(event) => setClear(event.currentTarget.value)}
        rightSection={
          <Flex>
            <ActionIcon
              size={32}
              color="gray"
              variant="transparent"
              onClick={() => setClear("")}
              style={{ display: clear ? undefined : "none" }}
            >
              <Icons.CloseButton />
            </ActionIcon>
            <ActionIcon size={32} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />
    </Flex>
  );
}

export default CommentsForm;
