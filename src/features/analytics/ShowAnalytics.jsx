import { useEffect } from "react";
import useAnalyticsStore from "../../data/stores/useAnalyticsStore";
import AnalyticsCard from "../../widgets/analytics/AnalyticsCard";
import { Loader, Skeleton } from "@mantine/core";

export default function ShowAnalytics() {
  const { getMainAnalytics, mainAnalytics, mainAnalyticsLoading } =
    useAnalyticsStore((state) => ({
      getMainAnalytics: state.getMainAnalytics,
      mainAnalytics: state.mainAnalytics,
      mainAnalyticsLoading: state.mainAnalyticsLoading,
    }));

  useEffect(() => {
    getMainAnalytics();
  }, []);

  const data = [
    {
      id: 1,
      title: "Всего идей подано",
      stats: mainAnalytics.allIdeas,
      description:
        "Общее количество идей, поданных в нашем приложении. Включает в себя идеи по улучшению процессов, лучшие практики, и рационализаторские предложения от наших сотрудников.",
      link: "/analytics/all-ideas",
    },
    {
      id: 2,
      title: "Всего идей внедрено",
      stats: mainAnalytics.ideasImplemented,
      description:
        "Количество идей, которые были успешно внедрены после их подачи. Эти идеи привели к конкретным изменениям или улучшениям в нашей компании.",
      link: "/analytics/ideas-implemented",
    },
    {
      id: 3,
      title: "Идей на одного сотрудника",
      stats: mainAnalytics.ideasPerEmployee,
      description:
        "Среднее количество идей, предложенных каждым сотрудником. Это показывает активность и творческий потенциал наших сотрудников в процессе поиска новых решений и улучшений.",
      link: "/analytics/ideas-per-employee",
    },
    {
      id: 4,
      title: "Подается идей в день",
      stats: mainAnalytics.ideasPerDay,
      description:
        "Среднее количество идей, которые подаются в нашем приложении ежедневно. Это свидетельствует о постоянном потоке новых идей и о нашем стремлении к постоянному улучшению и инновациям.",
      link: "/analytics/ideas-per-day",
    },
  ];
  let content;
  if (mainAnalyticsLoading) {
    content = <Loader my={150} mx={48} size="xl" color="white" />;
  } else {
    content = data.map((item, index) => (
      <AnalyticsCard key={index} data={item} />
    ));
  }

  return content;
}
