import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";
import newsImg from "../../shared/images/newsImg.jpg";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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
import CommentsForm from "../../widgets/ideasAndNewsPage/commentsForm/CommentsForm";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import scrollToAnchor from "../../shared/utilits/ScrollToAnchor";
import { useDisclosure } from "@mantine/hooks";
import { getNewsData } from "../../api/news/news";
import { getNewsComments } from "../../api/news/newsComments";

const newsComments = {
  1: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 1",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: `      This Pokémon likes to lick its palms that are sweetened by being
      soaked in honey. Teddiursa concocts its own honey by blending fruits
      and pollen collected by Beedrill. Blastoise has water spouts that
      protrude from its shell. The water spouts are very accurate.`,
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "3",
      author: "Jane Smith",
      text: `      This Pokémon likes to lick its palms that are sweetened by being
      soaked in honey. Teddiursa concocts its own honey by blending fruits
      and pollen collected by Beedrill. Blastoise has water spouts that
      protrude from its shell. The water spouts are very accurate.`,
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  2: [
    // {
    //   id: "1",
    //   author: "Alice Johnson",
    //   text: "Comment 3",
    //   avatar: avatar,
    //   time: "18 апреля 2024",
    // },
    // {
    //   id: "2",
    //   author: "Bob Brown",
    //   text: "Comment 4",
    //   avatar: avatar,
    //   time: "18 апреля 2024",
    // },
  ],
  3: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 5",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 6",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  4: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 7",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 8",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  5: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 9",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 10",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  6: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 11",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 12",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  7: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 13",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 14",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  8: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 15",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 16",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  9: [
    {
      id: "1",
      author: "John Doe",
      text: "Comment 17",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Jane Smith",
      text: "Comment 18",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
  10: [
    {
      id: "1",
      author: "Alice Johnson",
      text: "Comment 19",
      avatar: avatar,
      time: "18 апреля 2024",
    },
    {
      id: "2",
      author: "Bob Brown",
      text: "Comment 20",
      avatar: avatar,
      time: "18 апреля 2024",
    },
  ],
};

function NewsPage() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsData();
        setNewsData(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNews();
  }, []);

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
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
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
                onClick={() => {
            scrollToTop();
          }}
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
  const { id } = useParams();
  const news = newsData.find((idea) => idea.id === id);
  console.log(news);
  const comments = newsComments[id];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromLink = urlParams.get("fromLink");
    if (fromLink === "true") {
      scrollToAnchor("comments");
    }
  }, [id]);

  return (
    <Container size="xl" mt={40}>
      {newsData ? (
        <>
          {news && (
            <>
              <Title>{news.title}</Title>
              <Flex gap="sm" wrap="wrap" align="center" mt={5}>
                <Anchor
                  component={NavLink}
                  to="/profile"
                  onClick={() => {
                    scrollToTop();
                  }}
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
                <AspectRatio
                  ratio={1920 / 500}
                  style={{ flex: "0 0 100%" }}
                  my={20}
                >
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
                  <Flex align="center" gap={3}>
                    <Icons.IconLike />
                    <Text>{news.likes}</Text>
                  </Flex>
                </Button>
              </Flex>

              <Divider id="comments" my="sm" />

              <Text fw={600} fz="lg" my={20}>
                Комментарии • {comments.length}
              </Text>

              <CommentsForm />

              <ShowComments comments={comments} />

              <Divider my="sm" />

              <Text fw={600} fz="lg" my={20}>
                Последние новости
              </Text>

              {cards}
            </>
          )}
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </Container>
  );
}

export default NewsPage;
