import classes from "./searchContent.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import { useState } from "react";
import {
  Container,
  Title,
  ScrollArea,
  TextInput,
  ActionIcon,
  Table,
  Flex,
  Anchor,
  Avatar,
  Popover,
  Button,
  Select,
  Text,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";

const data = [
  {
    id: "1",
    author: "Isaac Asimov",
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
    author: "Mary Shelley",
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
    author: "Stanislaw Lem",
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
    author: "Frank Herbert",
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
    author: "Ursula K. Le Guin",
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
    author: "Ursula K. Le Guin",
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
    author: "Ursula K. Le Guin",
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
    author: "Ursula K. Le Guin",
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
    author: "Ursula K. Le Guin",
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
    author: "Ursula K. Le Guin",
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

export default function SearchContent(props) {
  const [clear, setClear] = useState("");

  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>
          <Anchor
            component={NavLink}
            to={row.linkAuthor}
            underline="hover"
            className={classes.subLink}
            aria-label={row.title}
            onClick={scrollToTop}
          >
            <Flex align="center">
              <Avatar src={row.avatar} mr={10} />
              <Text fw={500} fz="md">
                {row.author}
              </Text>
            </Flex>
          </Anchor>
        </Table.Td>
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

  return (
    <Container size="xl" mt={20}>
      <TextInput
        radius="xl"
        size="xl"
        placeholder="Искать идеи..."
        rightSectionWidth={clear ? 230 : 188}
        leftSection={<Icons.IconSearch />}
        value={clear}
        rightSectionPointerEvents="all"
        onChange={(event) => setClear(event.currentTarget.value)}
        rightSection={
          <Flex>
            <ActionIcon
              size={42}
              color="gray"
              variant="transparent"
              onClick={() => setClear("")}
              style={{ display: clear ? undefined : "none" }}
            >
              <Icons.CloseButton />
            </ActionIcon>

            <Popover
              transitionProps={{ transition: "rotate-right", duration: 150 }}
              width={300}
              radius={16}
              position="bottom"
              withArrow
              arrowPosition="side"
              shadow="md"
            >
              <Popover.Target>
                <Button c="gray" variant="transparent" radius={12}>
                  Фильтры
                  <Icons.IconAdjustments />
                </Button>
              </Popover.Target>
              <Popover.Dropdown bg="var(--mantine-color-body)">
                <Select
                  label="По времени"
                  defaultValue="За все время" //дефалт велью должен меняться
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "За все время",
                    "За год",
                    "За месяц",
                    "За неделю",
                    "За день",
                  ]}
                />
                <Select
                  label="По просмотрам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Больше всего просмотров",
                    "Меньше всего просмотров",
                  ]}
                />
                <Select
                  label="По голосам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={["Все", "Больше всего голосов", "Меньше всего голосов"]}
                />
                <Select
                  label="По стадии"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Поданные идеи",
                    "Одобренные идеи",
                    "Внедренные идеи",
                  ]}
                />
                <Select
                  label="По статусу"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "На рассмотрении",
                    "На формировании итогового экспертного заключения",
                    "Одобрена",
                    "На внедрении",
                    "Внедрена",
                    "На доработке",
                    "Отложена",
                    "Отклонена",
                  ]}
                />
              </Popover.Dropdown>
            </Popover>

            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
        {...props}
      />
      <Table.ScrollContainer h={500} mt={30}>
        <Table highlightOnHover stickyHeader verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Title fz="lg">ФИО автора</Title>
              </Table.Th>
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
    </Container>
  );
}
