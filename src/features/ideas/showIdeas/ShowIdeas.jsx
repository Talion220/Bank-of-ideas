import useIdeasStore from "../../../data/stores/useIdeasStore";
import IdeasCard from "../../../widgets/ideas/ideasCard/IdeasCard";

export default function ShowIdeas() {
  const { allIdeasData } = useIdeasStore((state) => ({
    allIdeasData: state.allIdeasData,
  }));
  const cards = allIdeasData.map((article, index) => (
    <IdeasCard key={index} article={article} />
  ));
  return cards;
}
