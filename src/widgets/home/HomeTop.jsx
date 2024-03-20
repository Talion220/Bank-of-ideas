import HomeTopAuthors from "./homeTop/HomeTopAuthors";
import HomeTopFilials from "./homeTop/HomeTopFilials";
import HomeTopBusinessProcesses from "./homeTop/HomeTopBusinessProcesses";

import "./homeTop.module.css";
import { Grid } from "@mantine/core";

function HomeTop() {
  return (
    <Grid gutter="0" size="xl" py={80}>
      <Grid.Col pt={40} span={{ base: 12, md: 12, lg: 12 }}>
        <HomeTopAuthors />
      </Grid.Col>
      <Grid.Col pt={40} span={{ base: 12, md: 6, lg: 6 }}>
        <HomeTopFilials />
      </Grid.Col>
      <Grid.Col pt={40} span={{ base: 12, md: 6, lg: 6 }}>
        <HomeTopBusinessProcesses />
      </Grid.Col>
    </Grid>
  );
}

export default HomeTop;
