import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import classes from "./sameIdeas.module.css";
import Like from "../like/Like";
import formatDate from "../../../features/date/date";

export default function SameIdeas({ article }) {
  const date = formatDate(article.date);
  return (
    <Card
      key={article.id}
      withBorder
      radius="16"
      p={0}
      mb={20}
      className={classes.card}
    >
      <Group wrap="nowrap" gap={0}>
        <Flex direction="column" className={classes.body}>
          <Badge
            size="sm"
            variant="gradient"
            gradient={{ from: "blue", to: "indigo", deg: 135 }}
          >
            {article.category}
          </Badge>
          <Anchor
            component={NavLink}
            to={`/idea/${article.id}`}
            onClick={() => {
              scrollToTop();
            }}
            c="dark"
          >
            <Text className={classes.title} mt="xs">
              {article.title}
            </Text>
          </Anchor>
          <Flex gap="sm" mt="xs">
            <Text size="sm">Статус:</Text>
            <Badge size="md" variant="light" color="blue">
              {article.status}
            </Badge>
          </Flex>
          <Group pt={15} wrap="nowrap" gap="xs">
            <Anchor
              component={NavLink}
              to="/profile"
              onClick={() => {
                scrollToTop();
              }}
              c="dark"
              //   className={classes.link}
            >
              <Group gap="xs" wrap="nowrap">
                <Avatar size={20} src={article.avatar} />
                <Text size="sm">{article.author}</Text>
              </Group>
            </Anchor>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed">
              {article.businessProcess}
            </Text>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed">
              {date}
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
            <Center>
              <Like id={article.id} from={"ideas"} />
            </Center>
            <Center>
              <Button
                variant="light"
                c="gray"
                radius="16"
                color="blue"
                component={NavLink}
                to={`/idea/${article.id}?fromLink=true`}
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
            </Center>
          </Group>
        </Flex>
      </Group>
    </Card>
  );
}
