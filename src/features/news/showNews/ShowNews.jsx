import useNewsStore from "../../../data/stores/useNewsStore";
import NewsCard from "../../../widgets/ideasAndNewsPage/newsCard/NewsCard";

export default function ShowNews() {
  const { allNewsData } = useNewsStore((state) => ({
    allNewsData: state.allNewsData,
  }));
  const cards = allNewsData.map((article, index) => (
    <NewsCard key={index} article={article} index={index} />
  ));
  return cards;
}
