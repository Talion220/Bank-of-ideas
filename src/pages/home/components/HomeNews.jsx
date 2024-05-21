import { Container, Flex, Title, rem, useMantineTheme } from "@mantine/core";
import ShowLatestNews from "../../../features/ideasAndNewsPage/showLatestNews/ShowLatestNews";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

function HomeNews() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="xl">
      <Title ta="center" pb={32}>
        Последние новости
      </Title>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        <ShowLatestNews id={null} from={"homePage"} />
      </Carousel>
    </Container>
  );
}

export default HomeNews;
