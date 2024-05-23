import { Center, Text } from "@mantine/core";
import useNewsStore from "../../../data/stores/useNewsStore";
import NewsCardComments from "../../../widgets/news/newsCard/comments/NewsCardComments";

export default function ShowNewsCardComments({ id }) {
  const { latestCommentsNewsCard } = useNewsStore((state) => ({
    latestCommentsNewsCard: state.latestCommentsNewsCard,
  }));

  if (latestCommentsNewsCard[id].length === 0) {
    return (
      <Center my={58}>
        <Text c="dimmed"> Комментариев пока нет...</Text>
      </Center>
    );
  } else {
    const res = latestCommentsNewsCard[id].map((article, index) => (
      <NewsCardComments key={index} article={article} />
    ));
    return res;
  }
}
