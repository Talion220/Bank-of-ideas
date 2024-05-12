import { Flex, Title } from "@mantine/core";
import ShowLatestNews from "../../../../features/ideasAndNewsPage/latestNews/ShowLatestNews";

function HomeNews() {
  return (
    <Flex direction="column" align="center">
      <Title pb={15}>Последние новости</Title>
      <ShowLatestNews id={null} from={"homePage"} count={5} />
    </Flex>
  );
}

export default HomeNews;
