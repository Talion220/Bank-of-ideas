import { Anchor, Avatar, Group, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../../shared/utilities/ScrollToTop";
import classes from "./newsComments.module.css";

export default function NewsComments({ article }) {
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
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          24 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>

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
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          18 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>
    </>
  );
}
