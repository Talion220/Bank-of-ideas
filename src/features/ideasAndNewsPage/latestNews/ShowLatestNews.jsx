import LatestNews from "../../../widgets/ideasAndNewsPage/latestNews/LatestNews";

const ShowLatestNews = ({ data }) =>
  data.map((article) => <LatestNews key={article.id} article={article} />);

export default ShowLatestNews;
