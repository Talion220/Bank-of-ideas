import { useEffect, useState } from "react";
import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";
import useNewsStore from "../../../data/stores/useNewsStore";
import HomeLatestNews from "../../../widgets/homeLatestNews/HomeLatestNews";
import { useShallow } from "zustand/react/shallow";
import { Center, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const ShowLatestNews = ({ id, from }) => {
  const { getLatest } = useNewsStore(
    useShallow((state) => ({
      getLatest: state.getLatest,
    }))
  );
  console.log("latest");
  const [post, setPost] = useState([]);
  useEffect(() => {
    getLatest(id).then((res) => {
      setPost(res);
    });
  }, [id]);
  if (post.length === 0) {
    return (
      <Center my={100}>
        <Text c="dimmed">Похоже, других новостей пока нет...</Text>
      </Center>
    );
  } else if (from === "newsPage") {
    return post.map((article) => (
      <LatestNews key={article.id} article={article} />
    ));
  } else if (from === "homePage") {
    return post.map((article) => (
      <Carousel.Slide key={article.id}>
        <HomeLatestNews article={article} />
      </Carousel.Slide>
    ));
  }
};

export default ShowLatestNews;
