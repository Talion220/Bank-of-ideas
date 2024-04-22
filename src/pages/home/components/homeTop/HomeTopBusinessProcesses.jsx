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
        <Text className={styles.text}>{item.title}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    // <Flex align="center" direction="column">
    <Table.ScrollContainer w={500}>
      <Table verticalSpacing="sm" horizontalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Title pb="xl">Топ бизнес процессов</Title>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    // {/* </Flex> */}
  );
}

export default HomeTopBusinessProcesses;
