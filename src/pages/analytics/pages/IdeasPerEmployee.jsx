import { Container, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";

const dataIdeaPerDay = [
  {
    date: "1 Апреля",
    ideas: 3.5,
  },
  {
    date: "2 Апреля",
    ideas: 3.6,
  },
  {
    date: "3 Апреля",
    ideas: 2.9,
  },
  {
    date: "4 Апреля",
    ideas: 3.2,
  },
  {
    date: "5 Апреля",
    ideas: 3.4,
  },
  {
    date: "6 Апреля",
    ideas: 4.1,
  },
  {
    date: "7 Апреля",
    ideas: 4.7,
  },
];

export default function IdeasPerEmployee() {
  return (
    <Container size="xl">
      <Title ta="center">Количество идей на одного сотрудника</Title>
      <Text p="30px 0 100px" fz="lg" ta="center">
        В день
      </Text>
      <AreaChart
        h={500}
        yAxisLabel="Количество идей"
        tooltipAnimationDuration={200}
        data={dataIdeaPerDay}
        dataKey="date"
        withGradient
        series={[{ name: "ideas", label: "Идей", color: "blue" }]}
      />
    </Container>
  );
}
