import HomeBenefitImg1 from "../../shared/images/HomeBenefitImg1.jpg";
import HomeBenefitImg2 from "../../shared/images/HomeBenefitImg2.jpg";
import HomeBenefitImg3 from "../../shared/images/HomeBenefitImg3.jpg";
import HomeBenefitImg4 from "../../shared/images/HomeBenefitImg4.jpg";
import HomeBenefitImg5 from "../../shared/images/HomeBenefitImg5.png";
import classes from "./homeBenefit.module.css";

import { Card, Grid, Image, Container, Text } from "@mantine/core";

const content = [
  {
    title: "Получи признание за свой вклад в развитие компании",
    image: HomeBenefitImg1,
  },
  {
    title: "Получи вознаграждение зв эффективные предложения",
    image: HomeBenefitImg2,
  },
  {
    title: "Почувствуй улучшение в ежедневной деятельности",
    image: HomeBenefitImg3,
  },
  {
    title: "Сформируй круг активных и неравнодушных коллег",
    image: HomeBenefitImg4,
  },
  {
    title: "Будь примером для других коллег",
    image: HomeBenefitImg5,
  },
];

function HomeBenefit() {
  const features = content.map((feature) => (
    <Grid.Col key={feature.title} my={20} span={{ base: 12, md: 4, lg: 4 }}>
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image className={classes.img} src={feature.image} height={180} />
        </Card.Section>

        <Text fw={700} mt="xs">
          {feature.title}
        </Text>
      </Card>
    </Grid.Col>
  ));

  return (
    <Container size="xl" py={100}>
      <Grid gutter={0}>{features}</Grid>
    </Container>
  );
}

export default HomeBenefit;
