import { Flex, Title } from "@mantine/core";
import ShowLatestNews from "../../../../features/ideasAndNewsPage/showLatestNews/ShowLatestNews";

function HomeNews() {
  return (
    <Flex direction="column" align="center">
      <Title pb={15}>Последние новости</Title>
      <ShowLatestNews id={null} from={"homePage"} />
    </Flex>
  );
}

export default HomeNews;
