import { NavLink } from "react-router-dom";
import newsImg from "../../../../shared/images/newsImg.jpg";
import classes from "./homeNews.module.css";
import scrollToTop from "../../../../shared/utilities/ScrollToTop";

import { Center, Flex, Title } from "@mantine/core";
import ShowLatestNews from "../../../../features/ideasAndNewsPage/latestNews/ShowLatestNews";

function HomeNews() {
  return (
    <Flex direction="column" align="center">
      <Title pb={15}>Новости</Title>
      <ShowLatestNews id={null} from={"homePage"} count={5} />
    </Flex>
  );
}

export default HomeNews;
