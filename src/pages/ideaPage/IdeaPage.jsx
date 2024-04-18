import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import ShowComments from "../../features/ideasAndNewsPage/comments/ShowComments";
import {
  Title,
  Text,
  Container,
  Image,
  AspectRatio,
  Avatar,
  Flex,
  Anchor,
  Button,
  Divider,
  Group,
  TextInput,
  ActionIcon,
  Card,
  Center,
  Badge,
} from "@mantine/core";

import classes from "./IdeaPage.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import { useDisclosure } from "@mantine/hooks";

const newsData = [
  {
    id: "1",
    author: "Isaac Asimov",
    title: "Foundation Lorem ipsum",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupinewsDatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    Английский перевод 1914 года, H. Rackham
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupinewsDatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae die reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    Английский перевод 1914 года, H. Rackham
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`,
    result: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupinewsDatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    Абзац 1.10.3tem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    Английский перевод 1914 года, H. Rackham
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`,
    note: "Explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "12",
    views: "34",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "2",
    author: "Mary Shelley",
    title: "Frankenstein",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "25",
    views: "86",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "3",
    author: "Stanislaw Lem",
    title: "Solaris",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "65",
    views: "125",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "4",
    author: "Frank Herbert",
    title: "Dune",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "4",
    views: "6",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "5",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "6",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "7",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "8",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "9",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "10",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    category: "Предложение по улучшению",
    businessProcess: "Бизнес процесс 1",
    problem: "problem",
    solution: "solution",
    result: "result",
    note: "note",
    coauthors: "Иванов Иван Иванович",
    file: "",
    status: "Внедрено",
    likes: "16",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
];

const newsComments = {
  1: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 1",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: `      This Pokémon likes to lick its palms that are sweetened by being
      soaked in honey. Teddiursa concocts its own honey by blending fruits
      and pollen collected by Beedrill. Blastoise has water spouts that
      protrude from its shell. The water spouts are very accurate.`,
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  2: [
    // {
    //   id: "1",
    //   author: "Alice Johnson",
    //   text: "Comment 3",
    //   avatar: avatar,
    //   time: "10 минут назад",
    // },
    // {
    //   id: "2",
    //   author: "Bob Brown",
    //   text: "Comment 4",
    //   avatar: avatar,
    //   time: "10 минут назад",
    // },
  ],
  3: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 5",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 6",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  4: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 7",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 8",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  5: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 9",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 10",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  6: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 11",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 12",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  7: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 13",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 14",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  8: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 15",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 16",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  9: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 17",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 18",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
  10: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 19",
      avatar: avatar,
      time: "10 минут назад",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 20",
      avatar: avatar,
      time: "10 минут назад",
    },
  ],
};

function IdeaPage() {
  const [liked, setLiked] = useDisclosure(false);

  const cards = newsData.slice(0, 3).map((article) => (
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
        onClick={scrollToTop}
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
              {/* <Anchor
                component={NavLink}
                to="/profile"
                onClick={scrollToTop}
                c="dark"
              > */}
              <Group gap="xs" wrap="nowrap">
                <Avatar size={20} src={article.avatar} />
                <Text size="sm">{article.author}</Text>
              </Group>
              {/* </Anchor> */}
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
                  {article.comments}
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
  ));

  const [clear, setClear] = useState("");
  const { id } = useParams();
  const idea = newsData.find((idea) => idea.id === id);

  const comments = newsComments[id];

  return (
    <Container size="xl" mt={40}>
      <Flex justify="space-between" align="center" wrap="wrap">
        <Flex direction="column">
          <Badge
            size="md"
            variant="gradient"
            gradient={{ from: "blue", to: "indigo", deg: 135 }}
          >
            {idea.category}
          </Badge>

          <Title lineClamp={4}>{idea.title}</Title>
          <Flex gap="sm" mt={5}>
            <Text>Статус:</Text>
            <Badge variant="light" color="blue" size="lg">
              {idea.status}
            </Badge>
          </Flex>

          <Flex gap="sm" wrap="wrap" align="center" mt={7}>
            <Anchor
              component={NavLink}
              to="/profile"
              onClick={scrollToTop}
              c="dark"
            >
              <Flex align="center">
                <Avatar size={20} src={idea.avatar} />
                <Text pl={10}>{idea.author}</Text>
              </Flex>
            </Anchor>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed">
              {idea.businessProcess}
            </Text>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed">
              {idea.date}
            </Text>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Flex align="center" gap={5} size="sm" c="dimmed">
              <Icons.IconEye />
              <Text size="sm">{idea.views}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Button
          my={10}
          component={NavLink}
          to="/life-cycle"
          onClick={scrollToTop}
          radius={16}
        >
          Посмотреть жизненный цикл
        </Button>
      </Flex>

      <Text fw={600} fz="lg" my={20}>
        Проблема
      </Text>

      <Text>{idea.problem}</Text>

      <Text fw={600} fz="lg" my={20}>
        Решение
      </Text>

      <Text>{idea.solution}</Text>

      <Text fw={600} fz="lg" my={20}>
        Результат
      </Text>

      <Text>{idea.result}</Text>

      {idea.note && (
        <div>
          <Text fw={600} fz="lg" my={20}>
            Примечание
          </Text>
          <Text>{idea.note}</Text>
        </div>
      )}

      {idea.coauthors && (
        <div>
          <Text fw={600} fz="lg" my={20}>
            Соавторы
          </Text>

          <Anchor
            component={NavLink}
            to="/profile"
            onClick={scrollToTop}
            c="dark"
          >
            <Flex gap="xs" align="center">
              <Avatar src={avatar} alt="avatar" radius="xl" />
              <Text>{idea.coauthors}</Text>
            </Flex>
          </Anchor>
        </div>
      )}

      <Flex gap="md" align="center" my="30px 20px">
        <Button
          variant="light"
          c={liked ? "red" : "gray"}
          radius="16"
          color="blue"
          onClick={() => {
            setLiked.toggle();
          }}
        >
          <Flex align="center">
            <Icons.IconLike />
            <Text>{idea.likes}</Text>
          </Flex>
        </Button>
      </Flex>

      <Divider my="sm" />

      <Text fw={600} fz="lg" my={20}>
        Комментарии • {comments.length}
      </Text>
      <Flex gap="xs" pb={20}>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={scrollToTop}
          c="dark"
        >
          <Avatar src={avatar} alt="avatar" radius="xl" />
        </Anchor>
        <TextInput
          radius="xl"
          size="md"
          w="100%"
          placeholder="Напишите комментарий..."
          rightSectionWidth={clear ? 76 : 44}
          value={clear}
          rightSectionPointerEvents="all"
          onChange={(event) => setClear(event.currentTarget.value)}
          rightSection={
            <Flex>
              <ActionIcon
                size={32}
                color="gray"
                variant="transparent"
                onClick={() => setClear("")}
                style={{ display: clear ? undefined : "none" }}
              >
                <Icons.CloseButton />
              </ActionIcon>
              <ActionIcon size={32} radius="xl" variant="filled">
                <Icons.IconArrowRight />
              </ActionIcon>
            </Flex>
          }
        />
      </Flex>

      {ShowComments(comments)}

      <Divider my="sm" />

      <Text fw={600} fz="lg" my={20}>
        Идеи по такому же бизнес процессу
      </Text>

      {cards}
    </Container>
  );
}

export default IdeaPage;
