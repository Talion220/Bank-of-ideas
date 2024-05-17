import classes from "./search.module.css";

import scrollToTop from "../../shared/utilities/ScrollToTop";
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
  Loader,
  Center,
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
  },
];

function Search() {
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
            onClick={() => {
              scrollToTop();
            }}
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
            to={`/idea/${row.id}`}
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
    <Container size="xl" mt={40}>
      <Flex justify="space-between">
        <div>
          <Title>Изучайте идеи компании</Title>
          <Text mt={20} c="dimmed">
            1,000 идей
          </Text>
        </div>
        <Button
          mt={15}
          radius={16}
          size="md"
          component={NavLink}
          to="/idea-create"
        >
          Создать идею
        </Button>
      </Flex>

      <TextInput
        mt={20}
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
              transitionProps={{ transition: "pop", duration: 150 }}
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
              <Popover.Dropdown>
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
                  label="По филиалам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Филиал 1",
                    "Филиал 2",
                    "Филиал 3",
                    "Филиал 4",
                    "Филиал 5",
                    "Филиал 6",
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
                  label="По лайкам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={["Все", "Больше всего лайков", "Меньше всего лайков"]}
                />
                <Select
                  label="По комментариям"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Больше всего комментариве",
                    "Меньше всего комментариев",
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
                    "Опубликована",
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
                <Select
                  label="По бизнес процессу"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Предложение по улучшению",
                    "Рационализаторское предложение",
                    "Лучшая практика",
                  ]}
                />
              </Popover.Dropdown>
            </Popover>

            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />
      <ScrollArea
        h={516}
        mt={20}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        classNames={{ scrollbar: classes.scroll }}
      >
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
                <Title fz="lg">Лайки</Title>
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
    </Container>
  );
}

export default Search;
