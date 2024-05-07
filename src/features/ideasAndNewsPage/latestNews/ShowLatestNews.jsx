import { useEffect, useState } from "react";
import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";
import useNewsStore from "../../../data/stores/useNewsStore";

const ShowLatestNews = ({ id }) => {
  const { getLatest } = useNewsStore((state) => ({
    getLatest: state.getLatest,
  }));
  const [post, setPost] = useState([]);
  useEffect(() => {
    getLatest(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  return post.map((article) => (
    <LatestNews key={article.id} article={article} />
  ));
};

export default ShowLatestNews;
