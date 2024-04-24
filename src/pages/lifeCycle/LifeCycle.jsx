import {
  Container,
  Title,
  Timeline,
  Text,
  Table,
  Center,
  HoverCard,
} from "@mantine/core";
import { Icons } from "../../shared/images/Icons";

const data = [{}];

const expertsData = [
  {
    id: "1",
    stage: true,
    status: "На рассмотрении",
    responsible: "Ильин И.И.",
    date: "05.03.2024",
    endDate: "12.03.2024",
    actualDate: "11.03.2024",
  },
  {
    id: "2",
    stage: true,
    status: "На рассмотрении",
    responsible: "Федоров Ф.Ф.",
    date: "05.03.2024",
    endDate: "12.03.2024",
    actualDate: "12.03.2024",
  },
  {
    id: "3",
    stage: false,
    status: "На рассмотрении",
    responsible: "Сидоров С.С.",
    date: "05.03.2024",
    endDate: "12.03.2024",
    actualDate: "07.03.2024",
  },
];

function LifeCycle() {
  const experts = expertsData.map((index) => (
    <Table withTableBorder withColumnBorders key={index.id} my={20}>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <HoverCard width={130} shadow="md" radius="md">
              <HoverCard.Target>
                <Center c={index.stage ? "green" : "yellow"}>
                  <Icons.IconCircle />
                </Center>
              </HoverCard.Target>
              <HoverCard.Dropdown bg="gray.1">
                <Text size="sm" ta="center">
                  {index.stage ? "Завершено" : "Выполняется"}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Table.Td>
          <Table.Td>
            <Text fw={600}>Статус</Text>
          </Table.Td>
          <Table.Td>
            <Text fw={600}>Ответственный</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td></Table.Td>
          <Table.Td>
            <Text>{index.status}</Text>
          </Table.Td>
          <Table.Td>
            <Text>{index.responsible}</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Text fw={600}>Дата</Text>
          </Table.Td>
          <Table.Td>
            <Text fw={600}>Срок</Text>
          </Table.Td>
          <Table.Td>
            <Text fw={600}>Фактическая дата</Text>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Text>{index.date}</Text>
          </Table.Td>
          <Table.Td>
            <Text>{index.endDate}</Text>
          </Table.Td>
          <Table.Td>
            <Text>{index.actualDate}</Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  ));

  return (
    <Container mt={40} size="xl">
      <Title mb={30}>Жизненный путь идеи: </Title>

      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item title="Создание идеи"></Timeline.Item>
        <Timeline.Item title="Публикация идеи">{experts}</Timeline.Item>
        <Timeline.Item title="Заключения экспертов">{experts}</Timeline.Item>
        <Timeline.Item title="Формирование итогового экспертного заключения">
          {experts}
        </Timeline.Item>
        <Timeline.Item title="Внедрено">{experts}</Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default LifeCycle;
