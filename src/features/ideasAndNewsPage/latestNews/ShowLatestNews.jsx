import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";

const ShowLatestNews = ({ data }) =>
  data
    .slice(0, 3)
    .map((article) => <LatestNews key={article.id} article={article} />);

export default ShowLatestNews;
