import {
  Anchor,
  Avatar,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import { NavLink } from "react-router-dom";
import classes from "./LatestNews.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import Like from "../../common/like/Like";
import formatDate from "../../../features/date/date";

function LatestNews({ article }) {
  const date = formatDate(article.date);
  return (
    <Card withBorder radius="16" p={0} mb={20} className={classes.card}>
      <Anchor
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        c="dark"
        underline="none"
        className={classes.link}
      >
        <Image radius="16" src={article.newsImg} className={classes.img} />
      </Anchor>
      <Flex direction="column" className={classes.body}>
        <Anchor
          component={NavLink}
          to={`/news/${article.id}`}
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
        >
          <Tooltip
            color="gray.2"
            multiline
            position="top-start"
            // withArrow
            transitionProps={{
              transition: "pop-bottom-left",
              duration: 200,
            }}
            c="black"
            label={article.title}
          >
            <Text className={classes.title} lineClamp={2} mt="xs">
              {article.title}
            </Text>
          </Tooltip>
        </Anchor>
        <Group pt={15} wrap="nowrap" gap="xs">
          <Flex gap="sm" wrap="wrap" align="center" mt={5}>
            <Anchor
              component={NavLink}
              to="/profile"
              onClick={() => {
                scrollToTop();
              }}
              c="dark"
            >
              <Group gap="xs" wrap="nowrap">
                <Avatar size={20} src={article.avatar} />
                <Text size="xs">{article.author}</Text>
              </Group>
            </Anchor>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {date}
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Flex align="center" gap={5} size="xs" c="dimmed">
              <Icons.IconEye />
              <Text size="xs">{article.views}</Text>
            </Flex>
          </Flex>
        </Group>
        <Group pt={15} gap="lg">
          <Like id={article.id} from={"news"} />
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
            <Center>
              <Icons.IconMessageCircle />
              <Text size="sm" className={classes.bodyText}>
                {article.comments.length}
              </Text>
            </Center>
          </Button>
        </Group>
      </Flex>
    </Card>
  );
}

export default LatestNews;
