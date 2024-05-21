import {
  Anchor,
  Flex,
  Text,
  Image,
  AspectRatio,
  Divider,
  Paper,
  Button,
  Title,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./homeLatestNews.module.css";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import formatDate from "../../features/date/date";

function HomeLatestNews({ article }) {
  const date = formatDate(article.date);

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${article.newsImg})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.date} size="xs">
          {date}
        </Text>
        <Title order={3} className={classes.title}>
          {article.title}
        </Title>
      </div>
      <Button
        component={NavLink}
        onClick={() => {
          scrollToTop();
        }}
        to={`/news/${article.id}`}
        variant="white"
        color="dark"
        size="lg"
      >
        Подробнее...
      </Button>
    </Paper>
  );
}

export default HomeLatestNews;
