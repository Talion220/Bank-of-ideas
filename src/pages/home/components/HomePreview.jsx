import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import classes from "./homePreview.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Center,
} from "@mantine/core";

import "@mantine/carousel/styles.css";

import swiper1 from "../../../shared/images/slider1.jpg";
import swiper2 from "../../../shared/images/slider2.jpg";
import swiper3 from "../../../shared/images/slider3.jpg";
import useIdeasStore from "../../../data/stores/useIdeasStore";

function Card({ image, count, title }) {
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

function HomePreview() {
  const { getHomeStats } = useIdeasStore((state) => ({
    getHomeStats: state.getHomeStats,
  }));

  const [homeStats, sethomeStats] = useState({});

  const data = [
    {
      image: swiper1,
      count: homeStats.total,
      title: "Идей подано",
    },
    {
      image: swiper2,
      count: homeStats.approved,
      title: "Идей одобрено",
    },
    {
      image: swiper3,
      count: homeStats.implemented,
      title: "Идей внедрено",
    },
  ];

  useEffect(() => {
    getHomeStats().then((statistics) => {
      sethomeStats(statistics);
    });
  }, []);
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <Container size="xl" px="md" my={100}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30} verticalSpacing={50}>
        <Flex
          data-aos="zoom-in-right"
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
            onClick={() => {
              scrollToTop();
            }}
          >
            Документация, инструкции
          </Button>
        </Flex>
        <div data-aos="zoom-in-right" className="slider">
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
    </Container>
  );
}

export default HomePreview;
