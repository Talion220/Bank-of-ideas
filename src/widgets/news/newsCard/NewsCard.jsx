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
  Tooltip,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./news.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import Like from "../../common/like/Like";
import { Icons } from "../../../shared/images/Icons";
import ShowNewsCardComments from "../../../features/news/showNewsCardComments/ShowNewsCardComments";
import formatDate from "../../../features/date/date";

function NewsCard({ article, index }) {
  const date = formatDate(article.date);
  return (
    <Card m={0} p="md" radius={16} shadow="sm" className={classes.card}>
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
          <Text fw="bold" lineClamp={1}>
            {article.title}
          </Text>
        </Tooltip>
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
          {date}
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
        <Like id={article.id} from={"news"} />
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

      <ShowNewsCardComments id={index} />
    </Card>
  );
}

export default NewsCard;
