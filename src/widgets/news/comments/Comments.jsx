import { Group, Text, Avatar, Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilits/ScrollToTop";

function Comments({ avatar, username, timestamp, text }) {
  return (
    <Group gap="xs" pb={20}>
      <Group>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={scrollToTop}
          c="dark"
        >
          <Avatar src={avatar} alt="avatar" radius="xl" />
        </Anchor>
        <div>
          <Anchor
            component={NavLink}
            to="/profile"
            onClick={scrollToTop}
            c="dark"
          >
            <Text size="md">{username}</Text>
          </Anchor>
          <Text size="xs" c="dimmed" underline="none">
            {timestamp}
          </Text>
        </div>
      </Group>

      <Text pl={54} size="md">
        {text}
      </Text>
    </Group>
  );
}

export default Comments;
