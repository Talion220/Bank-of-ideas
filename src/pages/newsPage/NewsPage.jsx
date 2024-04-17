import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";
import newsImg from "../../shared/images/newsImg.jpg";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
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
  Textarea,
  ActionIcon,
  Card,
  Center,
} from "@mantine/core";

import classes from "./NewsPage.module.css";

import ShowComments from "../../features/ideasAndNewsPage/comments/ShowComments";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import { useDisclosure } from "@mantine/hooks";
import { fetchUserData } from "../../api/news/test";

const data = [
  {
    id: "1",
    author: "Павлова Мария Алиевна",
    avatar: avatar,
    title: "Foundation",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    Английский перевод 1914 года, H. Rackham
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    
    Абзац 1.10.33 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    
    Английский перевод 1914 года, H. Rackham
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`,
    likes: "12",
    views: "34",
    newsImg:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "2",
    author: "Токарева Варвара Вячеславовна",
    avatar: avatar,
    title: "Frankenstein",
    text: "Lorem ipsum",
    likes: "25",
    views: "86",
    newsImg:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "3",
    author: "Куликова Вера Даниэльевна",
    avatar: avatar,
    title: "Solaris",
    text: "Lorem ipsum",
    likes: "65",
    views: "125",
    newsImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "4",
    author: "Быков Григорий Богданович",
    avatar: avatar,
    title: "Dune",
    text: "Lorem ipsum",
    likes: "4",
    views: "6",
    newsImg:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "5",
    author: "Климова Алина Марсельевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "6",
    author: "Соколова Александра Ивановна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "7",
    author: "Громов Павел Германович",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "8",
    author: "Моисеева Маргарита Кирилловна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "9",
    author: "Гаврилова Екатерина Марковна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "10",
    author: "Кононова Таисия Алиевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    views: "47",
    newsImg: newsImg,
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

function NewsPage() {
  fetchUserData().then((userData) => {
    console.log(userData);
  });

  const [liked, setLiked] = useDisclosure(false);

  const cards = data.slice(0, 3).map((article) => (
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
        to={`/news/${article.id}`}
        onClick={scrollToTop}
        c="dark"
        underline="none"
      >
        <Group wrap="nowrap" gap={0}>
          <Image radius="16" src={article.newsImg} w={300} />
          <Flex direction="column" className={classes.body}>
            <Text className={classes.title} mt="xs">
              {article.title}
            </Text>
            <Group pt={15} wrap="nowrap" gap="xs">
              {/* <Anchor
                component={NavLink}
                to="/profile"
                onClick={scrollToTop}
                c="dark"
                className={classes.link}
              > */}
              <Group gap="xs" wrap="nowrap">
                <Avatar size={20} src={article.avatar} />
                <Text size="xs">{article.author}</Text>
              </Group>
              {/* </Anchor> */}

              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
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
  const news = data.find((idea) => idea.id === id);

  const comments = newsComments[id];

  return (
    <Container size="xl" mt={40}>
      <Title>{news.title}</Title>
      <Flex gap="sm" wrap="wrap" align="center" mt={5}>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={scrollToTop}
          c="dark"
          className={classes.link}
        >
          <Flex align="center">
            <Avatar size={20} src={news.avatar} />
            <Text pl={10}>{news.author}</Text>
          </Flex>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {news.date}
        </Text>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Flex align="center" gap={5} size="sm" c="dimmed">
          <Icons.IconEye />
          <Text size="sm">{news.views}</Text>
        </Flex>
      </Flex>
      <div style={{ display: "flex" }}>
        <AspectRatio ratio={1920 / 500} style={{ flex: "0 0 100%" }} my={20}>
          <Image src={news.newsImg} radius={16} />
        </AspectRatio>
      </div>

      <Text>{news.text}</Text>
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
            <Text>{news.likes}</Text>
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
          className={classes.link}
        >
          <Avatar src={avatar} alt="avatar" radius="xl" />
        </Anchor>
        <Textarea
          radius="16"
          size="md"
          w="100%"
          placeholder="Написать комментарий..."
          rightSectionWidth={clear ? 76 : 44}
          autosize
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
        Последние новости
      </Text>

      {cards}
    </Container>
  );
}

export default NewsPage;
