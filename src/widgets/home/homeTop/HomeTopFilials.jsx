import styles from "./homeTopAll.module.css";

import { Center, Table, Text, Flex, Title } from "@mantine/core";

const topBusinessProcesses = [
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
      <Title pb="xl">Топ филиалов</Title>

      <Center>
        <Table.ScrollContainer maw={300}>
          <Table verticalSpacing="sm" horizontalSpacing="md" highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th fz="lg">Филиалы</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Center>
    </Flex>
  );
}

export default HomeTopFilials;
