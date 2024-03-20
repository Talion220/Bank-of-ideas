import styles from "./homeTopAll.module.css";

import { Center, Table, Text, Flex, Title } from "@mantine/core";

const topBusinessProcesses = [
  {
    title: "Бизнес процесс 1",
  },
  {
    title: "Бизнес процесс 2",
  },
  {
    title: "Бизнес процесс 3",
  },
  {
    title: "Бизнес процесс 4",
  },
  {
    title: "Бизнес процесс 5",
  },
];

function HomeTopBusinessProcesses() {
  const rows = topBusinessProcesses.map((item) => (
    <Table.Tr key={item.title}>
      <Table.Td>
        <Text fz="md" fw={500}>
          {item.title}
        </Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex align="center" direction="column">
      <Title pb="xl">Топ бизенс процессов</Title>

      <Center>
        <Table.ScrollContainer maw={300}>
          <Table verticalSpacing="sm" horizontalSpacing="md" highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th fz="lg">Бизнес процессы</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Center>
    </Flex>
  );
}

export default HomeTopBusinessProcesses;
