import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Center, Table, Text } from "@mantine/core";
import useIdeasStore from "../../../data/stores/useIdeasStore";
import HomeLatestIdeas from "../../../widgets/ideas/homeLatestIdeas/HomeLatestIdeas";

const ShowLatestIdeas = () => {
  const { getLatest } = useIdeasStore(
    useShallow((state) => ({
      getLatest: state.getLatest,
    }))
  );
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    getLatest().then((res) => {
      setIdeas(res);
    });
  }, []);
  // if (ideas.length === 0) {
  //   return (
  //     <Table.Tr>
  //       <Table.Td>
  //         <Center my={100}>
  //           <Text c="dimmed">Похоже, идей пока нет...</Text>
  //         </Center>
  //       </Table.Td>
  //     </Table.Tr>
  //   );
  // } else {
  return ideas.map((article) => (
    <HomeLatestIdeas key={article.id} article={article} />
  ));
  // }
};

export default ShowLatestIdeas;
