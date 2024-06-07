import { Container, Title, Text, Skeleton } from "@mantine/core";
import { AreaChart, BarChart } from "@mantine/charts";
import useAnalyticsStore from "../../../data/stores/useAnalyticsStore";
import { useEffect } from "react";

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

export default function IdeasPerEmployee() {
  const {
    getIdeasPerEmployeeAnalytics,
    ideasPerEmployeeAnalyticsData,
    ideasPerEmployeeAnalyticsLoading,
  } = useAnalyticsStore((state) => ({
    getIdeasPerEmployeeAnalytics: state.getIdeasPerEmployeeAnalytics,
    ideasPerEmployeeAnalyticsData: state.ideasPerEmployeeAnalyticsData,
    ideasPerEmployeeAnalyticsLoading: state.ideasPerEmployeeAnalyticsLoading,
  }));

  useEffect(() => {
    getIdeasPerEmployeeAnalytics();
  }, []);
  return (
    <Container size="xl">
      <Title ta="center">Количество идей на одного сотрудника</Title>
      {ideasPerEmployeeAnalyticsLoading ? (
        <Skeleton height={650} my={30} radius={16} />
      ) : (
        <>
          <Text p="30px 0 100px" fz="lg" ta="center">
            За последнюю неделю
          </Text>
          <AreaChart
            h={500}
            yAxisLabel="Количество идей на одного сотрудника"
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
            yAxisLabel="Количество идей на одного сотрудника"
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
            yAxisLabel="Количество идей на одного сотрудника"
            series={[
              {
                name: "businessProcessesIdeas",
                label: "Идей",
                color: "cyan.7",
              },
            ]}
          />
        </>
      )}
    </Container>
  );
}
