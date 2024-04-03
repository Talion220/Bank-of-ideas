import classes from "./analytics.module.css";
import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Всего идей подано",
    stats: "456,133",
    description:
      "Общее количество идей, поданных в нашем приложении. Включает в себя идеи по улучшению процессов, лучшие практики, и рационализаторские предложения от наших сотрудников.",
    link: "/all-ideas",
  },
  {
    id: 2,
    title: "Всего идей внедрено",
    stats: "2,175",
    description:
      "Количество идей, которые были успешно внедрены после их подачи. Эти идеи привели к конкретным изменениям или улучшениям в нашей компании.",
    link: "/ideas-implemented",
  },
  {
    id: 3,
    title: "Идей на одного сотрудника",
    stats: "1,994",
    description:
      "Среднее количество идей, предложенных каждым сотрудником. Это показывает активность и творческий потенциал наших сотрудников в процессе поиска новых решений и улучшений.",
    link: "/ideas-per-employee",
  },
  {
    id: 4,
    title: "Подается идей в день",
    stats: "1,994",
    description:
      "Среднее количество идей, которые подаются в нашем приложении ежедневно. Это свидетельствует о постоянном потоке новых идей и о нашем стремлении к постоянному улучшению и инновациям.",
    link: "/ideas-per-day",
  },
];

function Analytics() {
  const stats = data.map((stat) => (
    <Flex
      key={stat.id}
      className={classes.stat}
      direction="column"
      align="start"
      justify="space-between"
    >
      <div>
        <Text className={classes.count}>{stat.stats}</Text>
        <Text className={classes.title}>{stat.title}</Text>
        <Text className={classes.description}>{stat.description}</Text>
      </div>
      <Button
        component={NavLink}
        to={stat.link}
        mt={"var(--mantine-spacing-md)"}
        c="blue"
        bg="white"
        radius={12}
      >
        Подробнее...
      </Button>
    </Flex>
  ));

  return (
    <Container className={classes.analytics} size="xl" mt={40}>
      <Title className={classes.heading} c="white">
        Аналитика и статистика: ваши идеи в действии
      </Title>
      <div className={classes.root}>{stats}</div>
    </Container>
  );
}

export default Analytics;
