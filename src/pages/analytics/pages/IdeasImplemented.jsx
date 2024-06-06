import { BarChart } from "@mantine/charts";
import { Container, Title, Text, Skeleton } from "@mantine/core";
import { useEffect } from "react";
import useAnalyticsStore from "../../../data/stores/useAnalyticsStore";

export default function IdeasImplemented() {
  const {
    getIdeasImplementedAnalytics,
    ideasImplementedAnalyticsData,
    ideasImplementedAnalyticsLoading,
  } = useAnalyticsStore((state) => ({
    getIdeasImplementedAnalytics: state.getIdeasImplementedAnalytics,
    ideasImplementedAnalyticsData: state.ideasImplementedAnalyticsData,
    ideasImplementedAnalyticsLoading: state.ideasImplementedAnalyticsLoading,
  }));

  useEffect(() => {
    getIdeasImplementedAnalytics();
  }, []);

  return (
    <Container size="xl">
      <Title ta="center">Всего идей внедрено</Title>
      {ideasImplementedAnalyticsLoading ? (
        <Skeleton height={650} my={30} radius={16} />
      ) : (
        <>
          <Text py={30} fz="lg" ta="center">
            По филиалам
          </Text>
          <BarChart
            h={650}
            data={ideasImplementedAnalyticsData.ideasImplementedFilials}
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
            h={650}
            data={
              ideasImplementedAnalyticsData.ideasImplementedBusinessProcesses
            }
            tooltipAnimationDuration={200}
            dataKey="businessProcess"
            // xAxisLabel="Бизнес процессы"
            yAxisLabel="Количество идей"
            series={[
              { name: "businessProcessIdeas", label: "Идей", color: "cyan.7" },
            ]}
          />
        </>
      )}
    </Container>
  );
}
