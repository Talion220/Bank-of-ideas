import { useEffect, useState } from "react";
import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";
import useNewsStore from "../../../data/stores/useNewsStore";
import HomeLatestNews from "../../../widgets/homeLatestNews/HomeLatestNews";
import { useShallow } from "zustand/react/shallow";

const ShowLatestNews = ({ id, from, count }) => {
  const { getLatest } = useNewsStore(
    useShallow((state) => ({
      getLatest: state.getLatest,
    }))
  );
  console.log("latest");
  const [post, setPost] = useState([]);
  useEffect(() => {
    getLatest(id, count).then((res) => {
      setPost(res);
    });
  }, [id]);
  if (from === "newsPage") {
    return post.map((article) => (
      <LatestNews key={article.id} article={article} />
    ));
  } else if (from === "homePage") {
    return post.map((article) => (
      <HomeLatestNews key={article.id} article={article} />
    ));
  }
};

export default ShowLatestNews;
