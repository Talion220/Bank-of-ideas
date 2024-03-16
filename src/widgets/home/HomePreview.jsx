import { NavLink } from "react-router-dom";
import { useRef } from "react";

import "./homePreview.scss";
import classes from "./Slider.module.scss";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Button, Paper, Title, useMantineTheme, Text } from "@mantine/core";

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
      {/* <Button variant="white" color="dark">
        Подробнее
      </Button> */}
    </Paper>
  );
}

function HomePreview() {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <div className="homePreview">
      <div className="homePreviewContent">
        <h1>Банк идей Россети Сибирь </h1>
        <h3>
          Предназначен для сбора и рассмотрения предложений по совершенствованию
          деятельности компании, а также для формирования базы лучших практик в
          целях их тиражирования.
        </h3>
        <NavLink to="/documentation">Документация, инструкции</NavLink>
      </div>
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
    </div>
  );
}

export default HomePreview;
