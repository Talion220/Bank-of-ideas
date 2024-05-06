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
} from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import { NavLink } from "react-router-dom";
import classes from "./LatestNews.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import Like from "../../../widgets/ideasAndNewsPage/like/Like";

function LatestNews({ article }) {
  return (
    <Card withBorder radius="16" p={0} mb={20} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Anchor
          component={NavLink}
          to={`/news/${article.id}`}
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
          underline="none"
        >
          <Image radius="16" src={article.newsImg} h={300} w={300} />
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
            <Text className={classes.title} mt="xs">
              {article.title}
            </Text>
          </Anchor>
          <Group pt={15} wrap="nowrap" gap="xs">
            <Anchor
              component={NavLink}
              to="/profile"
              onClick={() => {
                scrollToTop();
              }}
              c="dark"
              className={classes.link}
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
              {article.date}
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Flex align="center" gap={5} size="xs" c="dimmed">
              <Icons.IconEye />
              <Text size="xs">{article.views}</Text>
            </Flex>
          </Group>
          <Group pt={15} gap="lg">
            <Like id={article.id} />
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
      </Group>
    </Card>
  );
}

export default LatestNews;
