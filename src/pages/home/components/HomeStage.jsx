import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Image,
} from "@mantine/core";
import arrowStage from "../../../shared/images/arrowStage.svg";
import classes from "./homeStage.module.css";

const mockdata = [
  {
    title: "Публикация",
    description:
      "Вносите предложения по улучшению процесса компании или вашего подразделения и делитесь лучшими практиками.",
    icon: arrowStage,
  },
  {
    title: "Рассмотрение",
    description:
      "Все предложения проходят экспертизу. Экспертом формируется оценка и заключение о возможности тиражирования.",
    icon: arrowStage,
  },
  {
    title: "Поощрение",
    description:
      "За одобренные предложения и лучшие практики выплачивается поощрение.",
    icon: arrowStage,
  },
  {
    title: "Реализация",
    description:
      "Одобренные экспертами предложения внедряются в жизнь компании и совершенствуют ежедневные процессы. Лучшие практики тиражируются на все общество.",
    icon: arrowStage,
  },
  {
    title: "Вознаграждение за внедрение",
    description:
      "По факту внедрения подтверждается полученный экономический эффект и выплачивается вознаграждение участникам.",
    icon: arrowStage,
  },
];

function HomeStage() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Image className={classes.arrow} radius="md" src={arrowStage} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py={100}>
      <Title
        data-aos="zoom-in-right"
        order={2}
        className={classes.title}
        ta="center"
        mt="sm"
      >
        Как это работает?
      </Title>

      <Text
        data-aos="zoom-in-right"
        c="dimmed"
        className={classes.description}
        ta="center"
        mt="md"
      >
        Узнайте больше о процессах, которые пройдет ваша идея перед публикацией
      </Text>

      <SimpleGrid
        data-aos="zoom-in-right"
        cols={{ base: 1, md: 5 }}
        spacing="xl"
        mt={50}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default HomeStage;
