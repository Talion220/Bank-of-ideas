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
import { useParams } from "react-router-dom";

const lifeCycleData = [
  {
    id: "1",
    ideaCreate: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    ideaPublishing: [
      {
        // isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    expertsData: [
      {
        // isActive: true,
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
    ],
    finalExpertsData: [
      {
        isActive: false,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    status: [
      {
        isActive: false,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
  },
  {
    id: "2",
    ideaCreate: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин А.А.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    ideaPublishing: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    expertsData: [
      {
        isActive: true,
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
    ],
    finalExpertsData: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    status: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
  },
  {
    id: "3",
    ideaCreate: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин У.У.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    ideaPublishing: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    expertsData: [
      {
        isActive: true,
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
    ],
    finalExpertsData: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
    status: [
      {
        isActive: true,
        stage: true,
        status: "На рассмотрении",
        responsible: "Ильин И.И.",
        date: "05.03.2024",
        endDate: "12.03.2024",
        actualDate: "11.03.2024",
      },
    ],
  },
];

function LifeCycle() {
  const { id } = useParams();
  const data = lifeCycleData.find((index) => index.id === id);

  const keys = [
    { key: "ideaCreate", title: "Создание идеи" },
    { key: "ideaPublishing", title: "Публикация идеи" },
    { key: "expertsData", title: "Заключения экспертов" },
    {
      key: "finalExpertsData",
      title: "Формирование итогового экспертного заключения",
    },
    { key: "status", title: "Внедрено" },
  ];

  const renderData = keys.map((item) => {
    const keyData = data[item.key];

    //Переписать на Map
    //Написать запросы
    //добавить в стор
    //логика в мок
    //

    return (
      <Timeline.Item key={item.key} my={20}>
        <Text fz="lg" fw={700}>
          {item.title}
        </Text>
        {keyData.map((keyItem, index) => (
          <Table my={20} withTableBorder withColumnBorders key={index}>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text fw={600}>Состояние</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>Статус</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>Ответственный</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <HoverCard width={130} shadow="md" radius="md">
                    <HoverCard.Target>
                      <Center c={keyItem.stage ? "green" : "yellow"}>
                        <Icons.IconCircle />
                      </Center>
                    </HoverCard.Target>
                    <HoverCard.Dropdown bg="gray.1">
                      <Text size="sm" ta="center">
                        {keyItem.stage ? "Завершено" : "Выполняется"}
                      </Text>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </Table.Td>
                <Table.Td>
                  <Text>{keyItem.status}</Text>
                </Table.Td>
                <Table.Td>
                  <Text>{keyItem.responsible}</Text>
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
                  <Text>{keyItem.date}</Text>
                </Table.Td>
                <Table.Td>
                  <Text>{keyItem.endDate}</Text>
                </Table.Td>
                <Table.Td>
                  <Text>{keyItem.actualDate}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        ))}
      </Timeline.Item>
    );
  });

  const activeCount = renderData.reduce((acc, curr) => {
    const keyData = data[curr.key];
    let foundActiveInExperts = false;
    const count = keyData.reduce((acc, curr) => {
      if (curr.hasOwnProperty("isActive") && curr.isActive) {
        return acc + 1;
      } else if (curr.hasOwnProperty("expertsData") && !foundActiveInExperts) {
        const expertsCount = curr.expertsData.reduce((acc, expert) => {
          if (expert.hasOwnProperty("isActive") && expert.isActive) {
            foundActiveInExperts = true;
            return acc + 1;
          }
          return acc;
        }, 0);
        return acc + expertsCount;
      } else {
        return acc;
      }
    }, 0);
    return acc + count;
  }, 0);

  return (
    <Container mt={40} size="xl">
      <Title mb={30}>Жизненный путь идеи: </Title>

      <Timeline active={activeCount} bulletSize={24} lineWidth={2}>
        {renderData}
      </Timeline>
    </Container>
  );
}

export default LifeCycle;
