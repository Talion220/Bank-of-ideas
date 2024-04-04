import {
  UnstyledButton,
  Badge,
  AppShell,
  Container,
  Text,
  Avatar,
  Group,
  Flex,
  Anchor,
  Button,
  Stack,
  Table,
  Title,
  SegmentedControl,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./userMenu.module.css";
import avatar from "../../shared/images/avatar.png";
import { Icons } from "../../shared/images/Icons";
import scrollToTop from "../../shared/utilits/ScrollToTop";

const data = [
  {
    id: "1",
    title: "Foundation",
    status: "Внедрено",
    votes: "12",
    comments: "2",
    views: "34",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/1",
  },
  {
    id: "2",
    title: "Frankenstein",
    status: "Внедрено",
    votes: "25",
    comments: "4",
    views: "86",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/2",
  },
  {
    id: "3",
    title: "Solaris",
    status: "Внедрено",
    votes: "65",
    comments: "14",
    views: "125",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/3",
  },
  {
    id: "4",
    title: "Dune",
    status: "Внедрено",
    votes: "4",
    comments: "0",
    views: "6",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/4",
  },
  {
    id: "5",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
  {
    id: "6",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
  {
    id: "7",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
  {
    id: "8",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
  {
    id: "9",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
  {
    id: "10",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    linkIdea: "/idea/5",
  },
];

const rows = data.map((row) => {
  return (
    <Table.Tr key={row.id}>
      <Table.Td>
        <Anchor
          component={NavLink}
          to={row.linkIdea}
          underline="hover"
          className={classes.subLink}
          aria-label={row.title}
        >
          <Text fw={500} fz="md">
            {row.title}
          </Text>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {row.status}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {row.votes}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {row.comments}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {row.views}
        </Text>
      </Table.Td>
    </Table.Tr>
  );
});

function UserMenu() {
  return (
    <Stack mt={40}>
      <Flex justify="space-between" align="center">
        <Group wrap="nowrap">
          <Avatar src={avatar} size={94} />
          <div>
            <Text fz="lg" fw={500} className={classes.name}>
              Иванов Иван Иванович
            </Text>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              Красноярскэнерго
            </Text>

            <Group wrap="nowrap" gap={10} mt={3}>
              <Text fz="xs" c="dimmed">
                Генеральный директор
              </Text>
            </Group>
          </div>
        </Group>

        <Anchor component={NavLink} to="/alerts" className={classes.subLink}>
          <Button radius={16}>
            <Icons.Alert />
            <Text fw={500} fz="md">
              Уведомления
            </Text>
          </Button>
        </Anchor>
      </Flex>
      <SegmentedControl
        mt={20}
        color="blue"
        // fz="lg"
        data={[
          "Все",
          "Мои предложения по улучшению",
          "Мои лучшие практики",
          "Мои рационализаторские предложения",
        ]}
      />

      <Table.ScrollContainer h={500} mt={20}>
        <Table highlightOnHover stickyHeader verticalSpacing="lg">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Title fz="lg">Название идеи</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Статус</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Голоса</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Комментарии</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Просмотры</Title>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  );
}

export default UserMenu;
