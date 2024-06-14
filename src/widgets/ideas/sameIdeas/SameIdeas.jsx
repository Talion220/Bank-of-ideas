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
  Tooltip,
} from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import classes from "./sameIdeas.module.css";
import Like from "../../common/like/Like";
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
        <Flex direction="column" wrap="wrap" className={classes.body}>
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
            <Tooltip
              color="gray.3"
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
          <Flex gap="sm" mt="xs">
            <Text size="sm">Статус:</Text>
            <Badge size="md" variant="light" color="blue">
              {article.status}
            </Badge>
          </Flex>
          <Group pt={15} wrap="nowrap" gap="xs">
            <Flex gap="sm" wrap="wrap" align="center" mt={5}>
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
