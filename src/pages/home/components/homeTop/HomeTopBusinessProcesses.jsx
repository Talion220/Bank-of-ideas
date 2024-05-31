import styles from "./homeTopAll.module.css";

import {
  Center,
  Table,
  Text,
  Flex,
  Title,
  Divider,
  Group,
  Anchor,
  ScrollArea,
} from "@mantine/core";

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
        <Group gap="sm">
          <Text p="7px 0 8px" className={styles.text}>
            {item.title}
          </Text>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Center mt={50}>
      <ScrollArea mt={20}>
        <Table>
          <Table.Thead></Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Center>
  );
}

export default HomeTopBusinessProcesses;
