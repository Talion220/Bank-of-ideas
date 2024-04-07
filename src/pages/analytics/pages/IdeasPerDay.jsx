import { Container, Title, Text } from "@mantine/core";
import { AreaChart, BarChart } from "@mantine/charts";

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

const dataFilials = [
  { filial: "ИА", filialIdeas: 5 },
  { filial: "Алтайэнерго", filialIdeas: 1 },
  { filial: "Бурятэнерго", filialIdeas: 3 },
  { filial: "Красноярскэнерго", filialIdeas: 11 },
  { filial: "Кузбассэнерго-РЭС", filialIdeas: 8 },
  { filial: "Омскэнерго", filialIdeas: 5 },
  { filial: "Хакасэнерго", filialIdeas: 7 },
  { filial: "Читаэнерго", filialIdeas: 2 },
  { filial: "Тываэнерго", filialIdeas: 4 },
];

const dataBusinessProcesses = [
  { businessProcesses: "Бизнес процесс-1", businessProcessesIdeas: 3 },
  { businessProcesses: "Бизнес процесс-2", businessProcessesIdeas: 1 },
  { businessProcesses: "Бизнес процесс-3", businessProcessesIdeas: 15 },
  { businessProcesses: "Бизнес процесс-4", businessProcessesIdeas: 2 },
  { businessProcesses: "Бизнес процесс-5", businessProcessesIdeas: 0 },
  { businessProcesses: "Бизнес процесс-6", businessProcessesIdeas: 2 },
  { businessProcesses: "Бизнес процесс-7", businessProcessesIdeas: 5 },
  { businessProcesses: "Бизнес процесс-8", businessProcessesIdeas: 4 },
  { businessProcesses: "Бизнес процесс-9", businessProcessesIdeas: 2 },
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
        yAxisLabel="Количество идей за сегодня"
        tooltipAnimationDuration={200}
        data={dataIdeaPerDay}
        dataKey="date"
        withGradient
        series={[{ name: "ideas", label: "Идей", color: "blue" }]}
      />
      <Text p="100px 0 30px" fz="lg" ta="center">
        По филиалам
      </Text>
      <BarChart
        h={500}
        data={dataFilials}
        tooltipAnimationDuration={200}
        dataKey="filial"
        // xAxisLabel="Филиалы"
        yAxisLabel="Количество идей за сегодня"
        series={[{ name: "filialIdeas", label: "Идей", color: "purple" }]}
      />
      <Text p="100px 0 30px" fz="lg" ta="center">
        По бизнес-процессам
      </Text>
      <BarChart
        h={500}
        data={dataBusinessProcesses}
        tooltipAnimationDuration={200}
        dataKey="businessProcesses"
        // xAxisLabel="Бизнес процессы"
        yAxisLabel="Количество идей"
        series={[
          { name: "businessProcessesIdeas", label: "Идей", color: "red" },
        ]}
      />
    </Container>
  );
}
