import { Container, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import React from "react";

const dataIdeaPerDay = [
  {
    date: "1 Апреля",
    ideas: 50,
  },
  {
    date: "2 Апреля",
    ideas: 34,
  },
  {
    date: "3 Апреля",
    ideas: 65,
  },
  {
    date: "4 Апреля",
    ideas: 23,
  },
  {
    date: "5 Апреля",
    ideas: 42,
  },
  {
    date: "6 Апреля",
    ideas: 63,
  },
  {
    date: "7 Апреля",
    ideas: 78,
  },
];

export default function IdeasPerDay() {
  return (
    <Container size="xl">
      <Title ta="center">Количество идей в день</Title>
      <Text p="30px 0 100px" fz="lg" ta="center">
        За последнюю неделю
      </Text>
      <AreaChart
        h={500}
        yAxisLabel="Количество идей"
        tooltipAnimationDuration={200}
        data={dataIdeaPerDay}
        dataKey="date"
        withGradient
        series={[{ name: "ideas", label: "идей", color: "blue" }]}
      />
    </Container>
  );
}
