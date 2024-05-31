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

const topFilials = [
  {
    title: "Филиал 1",
  },
  {
    title: "Филиал 2",
  },
  {
    title: "Филиал 3",
  },
  {
    title: "Филиал 4",
  },
  {
    title: "Филиал 5",
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
