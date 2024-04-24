import {
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
  ScrollArea,
  Container,
  Center,
  Loader,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./profile.module.css";
import avatar from "../../shared/images/avatar.png";
import { Icons } from "../../shared/images/Icons";
import scrollToTop from "../../shared/utilities/ScrollToTop";

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
          onClick={() => {
            scrollToTop();
          }}
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

function Profile() {
  return (
    <Container size="xl">
      <Stack mt={40}>
        <Flex
          justify="space-between"
          align="center"
          className={classes.section}
        >
          <Group wrap="nowrap">
            <Avatar src={avatar} size={94} />
            <div>
              <Text fz="xl" fw={600} className={classes.name}>
                Иванов Иван Иванович
              </Text>
              <Text fz="md" fw={500}>
                Генеральный директор
              </Text>
              <Text fz="sm" fw={700} c="gray">
                Красноярскэнерго
              </Text>
            </div>
          </Group>

          <Button
            radius={16}
            component={NavLink}
            to="alerts"
            className={classes.btn}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Icons.Alert />
            <Text>Уведомления</Text>
          </Button>
        </Flex>

        <SegmentedControl
          className={classes.navbar}
          fullWidth
          mt={20}
          color="blue"
          data={[
            "Все",
            "Мои предложения по улучшению",
            "Мои лучшие практики",
            "Мои рационализаторские предложения",
          ]}
        />
        <ScrollArea
          h={500}
          mt={20}
          // onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
          classNames={{ scrollbar: classes.scroll }}
        >
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
          <Center>
            <Loader size={50} />
          </Center>
        </ScrollArea>
      </Stack>
    </Container>
  );
}

export default Profile;
