import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import {
  Anchor,
  Avatar,
  Badge,
  Card,
  Center,
  Flex,
  Group,
  Text,
} from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import classes from "./sameIdeas.module.css";

export default function SameIdeas({ article }) {
  return (
    <Card
      key={article.id}
      withBorder
      radius="16"
      p={0}
      mb={20}
      className={classes.card}
    >
      <Anchor
        component={NavLink}
        to={`/idea/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        c="dark"
        underline="none"
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
            <Text className={classes.title} mt="xs">
              {article.title}
            </Text>
            <Flex gap="sm" mt="xs">
              <Text size="sm">Статус:</Text>
              <Badge size="md" variant="light" color="blue">
                {article.status}
              </Badge>
            </Flex>
            <Group pt={15} wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar size={20} src={article.avatar} />
                <Text size="sm">{article.author}</Text>
              </Group>

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
                {article.date}
              </Text>
            </Group>
            <Group pt={15} gap="lg">
              <Center>
                <Icons.IconLike />
                <Text size="sm" className={classes.bodyText}>
                  {article.likes}
                </Text>
              </Center>
              <Center>
                <Icons.IconMessageCircle />
                <Text size="sm" className={classes.bodyText}>
                  {article.comments.length}
                </Text>
              </Center>
              <Center>
                <Icons.IconEye />
                <Text size="sm" className={classes.bodyText}>
                  {article.views}
                </Text>
              </Center>
            </Group>
          </Flex>
        </Group>
      </Anchor>
    </Card>
  );
}
