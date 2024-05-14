import { Anchor, Avatar, Group, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../../shared/utilities/ScrollToTop";
import classes from "./newsCardComments.module.css";

export default function NewsCardComments({ article }) {
  return (
    <>
      <Group wrap="nowrap" gap="xs" mt="xs">
        <Anchor
          component={NavLink}
          to={`/profile`}
          onClick={() => {
            scrollToTop();
          }}
          className={classes.link}
        >
          <Group gap="sm" wrap="nowrap">
            <Avatar size={20} src={article.avatar} />
            <Text size="sm" fw="500">
              {article.author}
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {article.date}
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        {article.text}
      </Text>
    </>
  );
}
