import { Title, Flex, Table } from "@mantine/core";
import ShowLatestIdeas from "../../../../features/showLatestIdeas/ShowLatestIdeas";

function HomeIdeas() {
  return (
    <Flex direction="column" align="center">
      <Title pb={15}>Последние идеи</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ФИО автора</Table.Th>
            <Table.Th>Название идеи</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <ShowLatestIdeas />
        </Table.Tbody>
      </Table>
    </Flex>
  );
}

export default HomeIdeas;
