import { Container, Flex, Title, rem, useMantineTheme } from "@mantine/core";
import ShowLatestNews from "../../../features/news/showLatestNews/ShowLatestNews";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function HomeNews() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  return (
    <Container size="xl" py={100}>
      <Title data-aos="zoom-in-right" ta="center" pb={50}>
        Последние новости
      </Title>
      <Carousel
        data-aos="zoom-in-right"
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <ShowLatestNews id={null} from={"homePage"} />
      </Carousel>
    </Container>
  );
}

export default HomeNews;
