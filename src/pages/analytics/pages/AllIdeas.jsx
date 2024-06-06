import { BarChart } from "@mantine/charts";
import { Container, Title, Text, Skeleton } from "@mantine/core";
import useAnalyticsStore from "../../../data/stores/useAnalyticsStore";
import { useEffect } from "react";

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
  const {
    getAllIdeasAnalytics,
    allIdeasAnalyticsData,
    allIdeasAnalyticsLoading,
  } = useAnalyticsStore((state) => ({
    getAllIdeasAnalytics: state.getAllIdeasAnalytics,
    allIdeasAnalyticsData: state.allIdeasAnalyticsData,
    allIdeasAnalyticsLoading: state.allIdeasAnalyticsLoading,
  }));

  useEffect(() => {
    getAllIdeasAnalytics();
  }, []);

  return (
    <Container size="xl">
      <Title ta="center">Всего идей подано</Title>
      {allIdeasAnalyticsLoading ? (
        <Skeleton height={650} my={30} radius={16} />
      ) : (
        <>
          <Text py={30} fz="lg" ta="center">
            По филиалам
          </Text>
          <BarChart
            h={650}
            data={allIdeasAnalyticsData.allIdeasFilials}
            tooltipAnimationDuration={200}
            dataKey="filial"
            // xAxisLabel="Филиалы"
            yAxisLabel="Количество идей"
            series={[{ name: "filialIdeas", label: "Идей", color: "pink" }]}
          />
          <Text p="100px 0 30px" fz="lg" ta="center">
            По бизнес-процессам
          </Text>
          <BarChart
            h={650}
            data={dataBusinessProcesses}
            tooltipAnimationDuration={200}
            dataKey="businessProcesses"
            // xAxisLabel="Бизнес процессы"
            yAxisLabel="Количество идей"
            series={[
              { name: "businessProcessesIdeas", label: "Идей", color: "blue" },
            ]}
          />
        </>
      )}
    </Container>
  );
}
