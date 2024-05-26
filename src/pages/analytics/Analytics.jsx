import { Container, Title } from "@mantine/core";
import ShowAnalytics from "../../features/analytics/ShowAnalytics";
import classes from "./analytics.module.css";

function Analytics() {
  return (
    <Container className={classes.analytics} size="xl" mt={40}>
      <Title className={classes.heading} c="white">
        Аналитика и статистика: Ваши идеи в действии
      </Title>
      <div className={classes.root}>
        <ShowAnalytics />
      </div>
    </Container>
  );
}

export default Analytics;
