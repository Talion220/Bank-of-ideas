import NewsCard from "../../widgets/ideasAndNewsPage/newsCard/NewsCard";

export default function ShowNews({ data }) {
  const cards = data.map((article, index) => (
    <NewsCard key={index} article={article} />
  ));
  return cards;
}
