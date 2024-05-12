import { Anchor, Flex, Text, Image, AspectRatio, Divider } from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./homeLatestNews.module.css";
import scrollToTop from "../../shared/utilities/ScrollToTop";

function HomeLatestNews({ article }) {
  return (
    <Anchor
      component={NavLink}
      to={`/news/${article.id}`}
      underline="hover"
      className={classes.subLink}
      aria-label={article.title}
      onClick={() => {
        scrollToTop();
      }}
    >
      <Divider my="sm" />
      <Flex justify="flex-start" align="center">
        <AspectRatio ratio={16 / 9} style={{ width: "100px" }}>
          <Image src={article.newsImg} radius="md" />
        </AspectRatio>
        <Flex direction="column">
          <Text ml={15} fw={500} fz="md">
            {article.title}
          </Text>
          <Text ml={15} size="sm" c="dimmed">
            {article.date}
          </Text>
        </Flex>
      </Flex>
    </Anchor>
  );
}

export default HomeLatestNews;
