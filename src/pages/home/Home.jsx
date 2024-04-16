import { NavLink } from "react-router-dom";
import { useRef } from "react";

import classes from "./home.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Center,
  Card,
  Image,
  useMantineTheme,
} from "@mantine/core";

import arrowStage from "../../shared/images/arrowStage.svg";

import "@mantine/carousel/styles.css";

import swiper1 from "../../shared/images/slider1.jpg";
import swiper2 from "../../shared/images/slider2.jpg";
import swiper3 from "../../shared/images/slider3.jpg";

const data = [
  {
    image: swiper1,
    count: 2500,
    title: "Идей подано",
  },
  {
    image: swiper2,
    count: 1500,
    title: "Идей одобрено",
  },
  {
    image: swiper3,
    count: 500,
    title: "Идей внедрено",
  },
];

function Cards({ image, count, title }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.title} size="xs">
          {title}
        </Text>
        <Title order={3} className={classes.count}>
          {count}
        </Title>
      </div>
    </Paper>
  );
}

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

import HomeBenefit from "../../widgets/home/HomeBenefit";
import HomeTop from "../../widgets/home/HomeTop";
import HomeOtherWidgets from "../../widgets/home/HomeOtherWidgets";

function Home() {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cards {...item} />
    </Carousel.Slide>
  ));

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.cardStage}
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
    <>
      <Container size="xl" px="md" my={100}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30} verticalSpacing={50}>
          <Flex
            styles={classes.homePreviewContent}
            direction="column"
            justify="center"
            align="start"
          >
            <Title>Банк идей Россети Сибирь </Title>
            <Text mt={15}>
              Предназначен для сбора и рассмотрения предложений по
              совершенствованию деятельности компании, а также для формирования
              базы лучших практик в целях их тиражирования.
            </Text>

            <Button
              mt={15}
              radius={16}
              size="md"
              component={NavLink}
              to="/documentation"
              onClick={scrollToTop}
            >
              Документация, инструкции
            </Button>
          </Flex>
          <div className="slider">
            <Carousel
              slideSize={{ base: "100%", sm: "100%" }}
              slideGap={{ base: "xl", sm: 2 }}
              align="start"
              slidesToScroll={mobile ? 1 : 1}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {slides}
            </Carousel>
          </div>
        </SimpleGrid>

        <Title mt={100} order={2} className={classes.titleStage} ta="center">
          Как это работает?
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Узнайте больше о процессах, которые пройдет ваша идея перед
          публикацией
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>

      <HomeTop />
      <HomeBenefit />
      <HomeOtherWidgets />
    </>
  );
}

export default Home;
