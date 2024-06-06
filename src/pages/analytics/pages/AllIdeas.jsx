import { BarChart } from "@mantine/charts";
import { Container, Title, Text, Skeleton } from "@mantine/core";
import useAnalyticsStore from "../../../data/stores/useAnalyticsStore";
import { useEffect } from "react";

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
            data={allIdeasAnalyticsData.allIdeasBusinessProcesses}
            tooltipAnimationDuration={200}
            dataKey="businessProcess"
            // xAxisLabel="Бизнес процессы"
            yAxisLabel="Количество идей"
            series={[
              { name: "businessProcessIdeas", label: "Идей", color: "blue" },
            ]}
          />
        </>
      )}
    </Container>
  );
}
