import { Icons } from "../../shared/images/Icons";
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
  Skeleton,
} from "@mantine/core";

import classes from "./NewsPage.module.css";

import ShowComments from "../../features/ideasAndNewsPage/comments/ShowComments";
import CommentsForm from "../../widgets/ideasAndNewsPage/commentsForm/CommentsForm";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import scrollToAnchor from "../../shared/utilits/ScrollToAnchor";
import { useDisclosure } from "@mantine/hooks";
import { getNewsData } from "../../api/news/news";

function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsData();
        setNewsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
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
  ));

  const { id } = useParams();
  let news = {};
  if (newsData.length > 0) {
    news = newsData.find((idea) => idea.id === id) || {};
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromLink = urlParams.get("fromLink");
    if (fromLink === "true") {
      scrollToAnchor("comments");
    }
  }, [id, loading]);

  if (loading) {
    return (
      <Container size="xl" mt={40}>
        <Skeleton height={44} radius={16} />
        <Skeleton height={24} maw={600} mt={5} radius={16} />
        <Skeleton height={340} my={30} radius={16} />
        <Skeleton height={600} radius={16} />
        <Skeleton height={34} mt={30} mb={20} maw={80} radius={16} />
        <Skeleton height={28} my={20} radius={16} />
        <Flex gap="xs" mb={20}>
          <Skeleton height={38} circle />
          <Skeleton height={66} radius={16} />
        </Flex>
        <Flex direction="column" gap="xs" mb={20}>
          <Group>
            <Skeleton height={38} circle />
            <div>
              <Skeleton height={20} mb={5} maw={150} radius={16} />
              <Skeleton height={15} maw={91} radius={16} />
            </div>
          </Group>
          <Skeleton height={50} radius={16} />
        </Flex>
        <Flex direction="column" gap="xs" mb={20}>
          <Group>
            <Skeleton height={38} circle />
            <div>
              <Skeleton height={20} mb={5} maw={150} radius={16} />
              <Skeleton height={15} maw={91} radius={16} />
            </div>
          </Group>
          <Skeleton height={50} radius={16} />
        </Flex>

        <Skeleton height={28} my={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
      </Container>
    );
  }

  return (
    <Container size="xl" mt={40}>
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
          <Flex align="center" gap={3}>
            <Icons.IconLike />
            <Text>{news.likes}</Text>
          </Flex>
        </Button>
      </Flex>

      <Divider id="comments" my="sm" />

      <Text fw={600} fz="lg" my={20}>
        Комментарии • {news.comments.length}
      </Text>

      <CommentsForm />

      <ShowComments comments={news.comments} />

      <Divider my="sm" />

      <Text fw={600} fz="lg" my={20}>
        Последние новости
      </Text>

      {cards}
    </Container>
  );
}

export default NewsPage;
