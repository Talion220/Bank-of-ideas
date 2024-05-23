import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import useIdeasStore from "../../../data/stores/useIdeasStore";
import SameIdeas from "../../../widgets/ideas/sameIdeas/SameIdeas";
import { Center, Text } from "@mantine/core";

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

  if (ideas.length === 0) {
    return (
      <Center my={100}>
        <Text c="dimmed">Таких идей пока нет...</Text>
      </Center>
    );
  } else {
    return ideas.map((article) => (
      <SameIdeas key={article.id} article={article} />
    ));
  }
};

export default ShowSameIdeas;
