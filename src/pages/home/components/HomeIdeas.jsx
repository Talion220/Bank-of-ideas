import { Title, Flex, Table, Container, Button } from "@mantine/core";
import ShowLatestIdeas from "../../../features/showLatestIdeas/ShowLatestIdeas";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../../shared/utilities/ScrollToTop";

function HomeIdeas() {
  return (
    <Container size="xl" py={100}>
      <Title ta="center" pb={50}>
        Последние идеи
      </Title>
      <Table.ScrollContainer>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Title fz="lg">ФИО автора</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Название идеи</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Статус</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Лайки</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Комментарии</Title>
              </Table.Th>
              <Table.Th>
                <Title fz="lg">Просмотры</Title>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <ShowLatestIdeas />
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Button
        radius={16}
        mt={20}
        size="md"
        component={NavLink}
        to="/idea"
        onClick={() => {
          scrollToTop();
        }}
      >
        На страницу идей
      </Button>
    </Container>
  );
}

export default HomeIdeas;
