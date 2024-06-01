import styles from "./homeTopAll.module.css";

import { Center, Table, Text, Group, ScrollArea } from "@mantine/core";

const topFilials = [
  {
    title: "Красноярскэнерго",
  },
  {
    title: "Омскэнерго",
  },
  {
    title: "Алтайэнерго",
  },
  {
    title: "ИА",
  },
  {
    title: "Читаэнерго",
  },
];

function HomeTopFilials() {
  const rows = topFilials.map((item) => (
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

export default HomeTopFilials;
