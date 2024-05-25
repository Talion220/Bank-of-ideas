import useIdeasStore from "../../../data/stores/useIdeasStore";
import IdeasCard from "../../../widgets/ideas/ideasCard/IdeasCard";

export default function ShowIdeas({ from }) {
  const { allIdeasData, allIdeasProfileData } = useIdeasStore((state) => ({
    allIdeasData: state.allIdeasData,
    allIdeasProfileData: state.allIdeasProfileData,
  }));
  let cards;
  if (from === "profile") {
    cards = allIdeasProfileData.map((article, index) => (
      <IdeasCard key={index} article={article} from="profile" />
    ));
  } else {
    cards = allIdeasData.map((article, index) => (
      <IdeasCard key={index} article={article} from="search" />
    ));
  }
  return cards;
}
