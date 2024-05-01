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
  Skeleton,
} from "@mantine/core";

import ShowComments from "../../features/ideasAndNewsPage/comments/ShowComments";
import CommentsForm from "../../widgets/ideasAndNewsPage/commentsForm/CommentsForm";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import scrollToAnchor from "../../shared/utilities/ScrollToAnchor";
// import { useNewsStore } from "../../data/stores/useNewsStore";
import { getNewsData, setLike, getLatestNews } from "../../api/news/news";
import ShowLatestNews from "../../features/ideasAndNewsPage/latestNews/ShowLatestNews";
import Like from "../../widgets/ideasAndNewsPage/like/Like";

function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  // const { loading, newsData, fetchData, likeCount, setLike, isLiked } = useNewsStore();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsData({ id });
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // let news = {};
  // if (newsData.length > 0) {
  //   news = newsData.find((page) => page.id === parseInt(id)) || {};
  // }

  const [likeCount, setLikeCount] = useState(news.likes);
  const [isLiked, setIsLiked] = useState(news.isLiked);

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
        <Like
          isLiked={isLiked}
          onLike={() => {
            setIsLiked(!isLiked);
            if (!isLiked) {
              setLike({ id, action: "add" }).then((post) =>
                setLikeCount(post.likes)
              );
            } else {
              setLike({ id, action: "remove" }).then((post) =>
                setLikeCount(post.likes)
              );
            }
          }}
          getCount={likeCount}
        />
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

      {/* <ShowLatestNews data={getLatestNews({ id })} /> */}
    </Container>
  );
}

export default NewsPage;
