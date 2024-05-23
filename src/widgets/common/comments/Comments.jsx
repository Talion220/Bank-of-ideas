import { Group, Text, Avatar, Anchor, Flex, Spoiler } from "@mantine/core";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import formatDate from "../../../features/date/date";

function Comments({ avatar, author, time, text }) {
  const date = formatDate(time);
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
            {date}
          </Text>
        </div>
      </Group>

      <Spoiler
        ml={54}
        size="md"
        maxHeight={120}
        showLabel="Показать полностью..."
        hideLabel="Показать меньше."
      >
        <div style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {text}
        </div>
      </Spoiler>
    </Flex>
  );
}

export default Comments;
