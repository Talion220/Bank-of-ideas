import HomeIdeas from "./homeOtherWidgets/HomeIdeas";
import HomeNews from "./homeOtherWidgets/HomeNews";
import classes from "./homeOtherWidgets.module.css";
import { Container, Flex } from "@mantine/core";

function HomeOtherWidgets() {
  return (
    <Container mt={100} size="xl">
      <Flex justify="space-between" wrap="wrap">
        <HomeNews />
        <HomeIdeas />
      </Flex>
    </Container>
  );
}

export default HomeOtherWidgets;
