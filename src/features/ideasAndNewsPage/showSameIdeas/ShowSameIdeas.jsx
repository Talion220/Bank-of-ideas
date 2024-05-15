import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import useIdeasStore from "../../../data/stores/useIdeasStore";
import SameIdeas from "../../../widgets/ideasAndNewsPage/sameIdeas/SameIdeas";

const ShowSameIdeas = ({ id }) => {
  const { getSame } = useIdeasStore(
    useShallow((state) => ({
      getSame: state.getSame,
    }))
  );
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    getSame(id).then((res) => {
      setIdeas(res);
    });
  }, [id]);

  return ideas.map((article) => (
    <SameIdeas key={article.id} article={article} />
  ));
};

export default ShowSameIdeas;
