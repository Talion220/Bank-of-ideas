import { Group, Text, Avatar, Anchor, Flex } from "@mantine/core";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilits/ScrollToTop";

function Comments({ avatar, author, time, text }) {
  return (
    <Flex direction="column" gap="xs" pb={20}>
      <Group>
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
        <div>
          <Anchor
            component={NavLink}
            to="/profile"
            onClick={() => {
              scrollToTop();
            }}
            c="dark"
          >
            <Text size="md">{author}</Text>
          </Anchor>
          <Text size="xs" c="dimmed" underline="none">
            {time}
          </Text>
        </div>
      </Group>

      <Text pl={54} size="md">
        {text}
      </Text>
    </Flex>
  );
}

export default Comments;
