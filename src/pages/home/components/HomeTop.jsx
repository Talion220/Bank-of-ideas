import HomeTopAuthors from "./homeTop/HomeTopAuthors";
import HomeTopFilials from "./homeTop/HomeTopFilials";
import HomeTopBusinessProcesses from "./homeTop/HomeTopBusinessProcesses";
import { Icons } from "../../../shared/images/Icons";

import { Grid, Container, Flex, Tabs, rem, Title, Center } from "@mantine/core";

function HomeTop() {
  return (
    <Container size="xl" py={100}>
      <Title ta="center" pb={50}>
        Наши лидеры
      </Title>
      <Center>
        <Tabs variant="pills" radius="md" defaultValue="authors">
          <Tabs.List>
            <Tabs.Tab value="authors" leftSection={<Icons.User />}>
              Лучшие авторы
            </Tabs.Tab>
            <Tabs.Tab value="filials" leftSection={<Icons.Filials />}>
              Лучшие филиалы
            </Tabs.Tab>
            <Tabs.Tab
              value="businessProcesses"
              leftSection={<Icons.BusinessProcesses />}
            >
              Лучшие бизнес-процессы
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="authors">
            <HomeTopAuthors />
          </Tabs.Panel>

          <Tabs.Panel value="filials">
            <HomeTopFilials />
          </Tabs.Panel>

          <Tabs.Panel value="businessProcesses">
            <HomeTopBusinessProcesses />
          </Tabs.Panel>
        </Tabs>
      </Center>
    </Container>
  );
}

export default HomeTop;
