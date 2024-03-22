import HomeTopAuthors from "./homeTop/HomeTopAuthors";
import HomeTopFilials from "./homeTop/HomeTopFilials";
import HomeTopBusinessProcesses from "./homeTop/HomeTopBusinessProcesses";

import { Grid, Container, Flex } from "@mantine/core";

function HomeTop() {
  return (
    <Container size="xl" py={100}>
      {/* <Grid gutter={0}>
        <Grid.Col pt={40} span={{ base: 12, md: 12, lg: 12 }}> */}
      <HomeTopAuthors />
      <Flex justify="space-between" wrap="wrap">
        {/* </Grid.Col>
        <Grid.Col pt={40} span={{ base: 12, md: 6, lg: 5 }}> */}
        <HomeTopFilials />
        {/* </Grid.Col>
        <Grid.Col pt={40} span={{ base: 12, md: 6, lg: 5 }}> */}
        <HomeTopBusinessProcesses />
        {/* </Grid.Col>
      </Grid> */}
      </Flex>
    </Container>
  );
}

export default HomeTop;
