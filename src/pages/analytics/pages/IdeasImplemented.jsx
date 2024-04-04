import { BarChart } from "@mantine/charts";
import { Container, Title, Text } from "@mantine/core";

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

export default function IdeasImplemented() {
  return (
    <Container size="xl">
      <Title ta="center">Всего идей внедрено</Title>
      <Text py={30} fz="lg" ta="center">
        По филиалам
      </Text>
      <BarChart
        h={500}
        data={dataFilials}
        tooltipAnimationDuration={200}
        dataKey="filial"
        // xAxisLabel="Филиалы"
        yAxisLabel="Количество идей"
        series={[{ name: "filialIdeas", label: "Идей", color: "teal.7" }]}
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
          { name: "businessProcessesIdeas", label: "Идей", color: "cyan.7" },
        ]}
      />
    </Container>
  );
}
