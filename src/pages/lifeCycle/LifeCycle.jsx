import {
  Container,
  Title,
  Timeline,
  Text,
  Table,
  Center,
  HoverCard,
  Skeleton,
  Tooltip,
} from "@mantine/core";
import { Icons } from "../../shared/images/Icons";
import { useParams } from "react-router-dom";
import useIdeasStore from "../../data/stores/useIdeasStore";
import { useEffect } from "react";
import formatDate from "../../features/date/date";

function LifeCycle() {
  const { id } = useParams();

  const { LifeCycleData, LifeCycleDataLoading, getLifeCycleData } =
    useIdeasStore((state) => ({
      LifeCycleData: state.LifeCycleData,
      LifeCycleDataLoading: state.LifeCycleDataLoading,
      getLifeCycleData: state.getLifeCycleData,
    }));

  useEffect(() => {
    getLifeCycleData(id);
  }, [id]);

  const renderLifeCycle = () => {
    return Object.keys(LifeCycleData.lifeCycle).map((key) => {
      const keyItem = LifeCycleData.lifeCycle[key];
      const date = formatDate(keyItem.date);
      return (
        <Timeline.Item key={key} my={20}>
          <Text fz="lg" fw={700}>
            {keyItem.title}
          </Text>
          <Table my={20} withTableBorder withColumnBorders>
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
                  <Tooltip
                    color="gray.2"
                    multiline
                    // withArrow
                    transitionProps={{
                      transition: "pop-bottom-left",
                      duration: 200,
                    }}
                    c="black"
                    label={keyItem.stage}
                  >
                    <Center
                      c={
                        keyItem.stage === "Выполнено"
                          ? "green"
                          : keyItem.stage === "В работе, срок не наступил"
                          ? "yellow"
                          : "red"
                      }
                    >
                      <Icons.IconCircle />
                    </Center>
                  </Tooltip>
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
                  <Text>{date}</Text>
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
        </Timeline.Item>
      );
    });
  };

  // return (
  //   <Timeline.Item key={item.key} my={20}>
  //     <Text fz="lg" fw={700}>
  //       {item.title}
  //     </Text>
  //     {keyData.map((keyItem, index) => (
  //       <Table my={20} withTableBorder withColumnBorders key={index}>
  //         <Table.Tbody>
  //           <Table.Tr>
  //             <Table.Td>
  //               <Text fw={600}>Состояние</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text fw={600}>Статус</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text fw={600}>Ответственный</Text>
  //             </Table.Td>
  //           </Table.Tr>
  //           <Table.Tr>
  //             <Table.Td>
  //               <HoverCard width={130} shadow="md" radius="md">
  //                 <HoverCard.Target>
  //                   <Center c={keyItem.stage ? "green" : "yellow"}>
  //                     <Icons.IconCircle />
  //                   </Center>
  //                 </HoverCard.Target>
  //                 <HoverCard.Dropdown bg="gray.1">
  //                   <Text size="sm" ta="center">
  //                     {keyItem.stage ? "Завершено" : "Выполняется"}
  //                   </Text>
  //                 </HoverCard.Dropdown>
  //               </HoverCard>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text>{keyItem.status}</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text>{keyItem.responsible}</Text>
  //             </Table.Td>
  //           </Table.Tr>
  //           <Table.Tr>
  //             <Table.Td>
  //               <Text fw={600}>Дата</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text fw={600}>Срок</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text fw={600}>Фактическая дата</Text>
  //             </Table.Td>
  //           </Table.Tr>
  //           <Table.Tr>
  //             <Table.Td>
  //               <Text>{keyItem.date}</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text>{keyItem.endDate}</Text>
  //             </Table.Td>
  //             <Table.Td>
  //               <Text>{keyItem.actualDate}</Text>
  //             </Table.Td>
  //           </Table.Tr>
  //         </Table.Tbody>
  //       </Table>
  //     ))}
  //   </Timeline.Item>
  // );

  if (
    LifeCycleDataLoading ||
    LifeCycleData === undefined ||
    Object.keys(LifeCycleData).length === 0
  ) {
    return (
      <Container size="xl" mt={40}>
        <Skeleton height={1000} radius={16} />
      </Container>
    );
  } else {
    return (
      <Container mt={40} size="xl">
        <Title mb={30}>Жизненный путь идеи: {LifeCycleData.title}</Title>

        <Timeline
          active={Object.keys(LifeCycleData.lifeCycle).length}
          bulletSize={24}
          lineWidth={2}
        >
          {renderLifeCycle()}
        </Timeline>
      </Container>
    );
  }
}

export default LifeCycle;
