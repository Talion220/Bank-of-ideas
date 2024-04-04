import { BarChart } from "@mantine/charts";
import { Container, Title } from "@mantine/core";

const dataFilials = [
  { filial: "ИА", filialIdeas: 12 },
  { filial: "Алтайэнерго", filialIdeas: 19 },
  { filial: "Бурятэнерго", filialIdeas: 4 },
  { filial: "Красноярскэнерго", filialIdeas: 10 },
  { filial: "Кузбассэнерго-РЭС", filialIdeas: 8 },
  { filial: "Омскэнерго", filialIdeas: 5 },
  { filial: "Хакасэнерго", filialIdeas: 7 },
  { filial: "Читаэнерго", filialIdeas: 7 },
  { filial: "Тываэнерго", filialIdeas: 15 },
];

const dataBusinessProcesses = [
  { businessProcesses: "Бизнес процесс-1", businessProcessesIdeas: 10 },
  { businessProcesses: "Бизнес процесс-2", businessProcessesIdeas: 1 },
  { businessProcesses: "Бизнес процесс-3", businessProcessesIdeas: 4 },
  { businessProcesses: "Бизнес процесс-4", businessProcessesIdeas: 10 },
  { businessProcesses: "Бизнес процесс-5", businessProcessesIdeas: 8 },
  { businessProcesses: "Бизнес процесс-6", businessProcessesIdeas: 25 },
  { businessProcesses: "Бизнес процесс-7", businessProcessesIdeas: 15 },
  { businessProcesses: "Бизнес процесс-8", businessProcessesIdeas: 7 },
  { businessProcesses: "Бизнес процесс-9", businessProcessesIdeas: 2 },
];

export default function AllIdeas() {
  return (
    <Container size="xl">
      <Title ta="center">Всего идей подано</Title>
      <BarChart
        h={500}
        data={dataFilials}
        tooltipAnimationDuration={200}
        dataKey="filial"
        series={[{ name: "filialIdeas", color: "pink" }]}
      />
      <BarChart
        h={500}
        data={dataBusinessProcesses}
        tooltipAnimationDuration={200}
        dataKey="businessProcesses"
        series={[{ name: "businessProcessesIdeas", color: "pink" }]}
      />
    </Container>
  );
}
