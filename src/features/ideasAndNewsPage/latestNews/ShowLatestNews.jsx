import { useEffect, useState } from "react";
import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";

const ShowLatestNews = ({ data }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    data.then((res) => {
      setPost(res);
    });
  }, [data]);
  return post.map((article) => (
    <LatestNews key={article.id} article={article} />
  ));
};

export default ShowLatestNews;
