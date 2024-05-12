import {
  Anchor,
  AspectRatio,
  Avatar,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

import classes from "./news.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import Like from "../like/Like";
import { Icons } from "../../../shared/images/Icons";

function NewsCard({ article }) {
  return (
    <Card m={0} p="md" radius={16} className={classes.card}>
      <AspectRatio
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        ratio={1920 / 1080}
      >
        <Image radius={16} src={article.newsImg} />
      </AspectRatio>

      <Anchor
        mt={10}
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        className={classes.link}
      >
        <Text fw="bold" lineClamp={1}>
          {article.title}
        </Text>
      </Anchor>

      <Flex gap="sm" wrap="wrap" align="center" mt={5}>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
          className={classes.link}
        >
          <Flex align="center">
            <Avatar size={20} src={article.avatar} />
            <Text pl={10}>{article.author}</Text>
          </Flex>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {article.date}
        </Text>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Flex align="center" gap={5} size="sm" c="dimmed">
          <Icons.IconEye />
          <Text size="sm">{article.views}</Text>
        </Flex>
      </Flex>

      <Group mt={10} gap="lg">
        <Like id={article.id} />
        <Center>
          <Button
            variant="light"
            c="gray"
            radius="16"
            color="blue"
            component={NavLink}
            to={`/news/${article.id}?fromLink=true`}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Flex align="center" gap={3}>
              <Icons.IconMessageCircle />
              <Text>{article.comments.length}</Text>
            </Flex>
          </Button>
        </Center>
      </Group>

      <Divider mt="sm" />

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
    </Card>
  );
}

export default NewsCard;
