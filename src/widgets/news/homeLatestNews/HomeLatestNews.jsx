import { Text, Paper, Button, Title, Tooltip } from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./homeLatestNews.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import formatDate from "../../../features/date/date";

function HomeLatestNews({ article }) {
  const date = formatDate(article.date);

  return (
    <Paper
      shadow="lg"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${article.newsImg})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.date} size="xs">
          {date}
        </Text>
        <Tooltip
          color="gray.2"
          multiline
          position="top-start"
          // withArrow
          transitionProps={{
            transition: "pop-bottom-left",
            duration: 200,
          }}
          c="black"
          label={article.title}
        >
          <Title lineClamp={2} order={3} className={classes.title}>
            {article.title}
          </Title>
        </Tooltip>
      </div>
      <Button
        component={NavLink}
        onClick={() => {
          scrollToTop();
        }}
        radius={16}
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
