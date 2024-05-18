import classes from "./search.module.css";
import ShowIdeas from "../../features/ideas/ShowIdeas";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  ScrollArea,
  TextInput,
  ActionIcon,
  Table,
  Flex,
  Popover,
  Button,
  Select,
  Text,
  Loader,
  Center,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import useIdeasStore from "../../data/stores/useIdeasStore";

function Search() {
  const { getAllIdeas, AllIdeasLoading, limitIdeas, allIdeasData, totalIdeas } =
    useIdeasStore((state) => ({
      getAllIdeas: state.getAllIdeas,
      AllIdeasLoading: state.AllIdeasLoading,
      allIdeasData: state.allIdeasData,
      totalIdeas: state.totalIdeas,
      limitIdeas: state.limitIdeas,
    }));

  const [inputValue, setInputValue] = useState("");
  const [inputPrevValue, setInputPrevValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    try {
      await getAllIdeas(currentPage, inputValue);
      if (inputPrevValue !== inputValue) {
        setCurrentPage(1);
      }
      setInputPrevValue(inputValue);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, inputValue]);

  const [clear, setClear] = useState("");

  return (
    <Container size="xl" mt={40}>
      <Flex justify="space-between">
        <div>
          <Title>Изучайте идеи компании</Title>
          <Text mt={20} c="dimmed">
            Всего идей: {allIdeasData.length}
          </Text>
        </div>
        <Button
          mt={15}
          radius={16}
          size="md"
          component={NavLink}
          to="/idea-create"
        >
          Создать идею
        </Button>
      </Flex>

      <TextInput
        mt={20}
        radius="xl"
        size="xl"
        placeholder="Искать идеи..."
        rightSectionWidth={clear ? 230 : 188}
        leftSection={<Icons.IconSearch />}
        value={clear}
        rightSectionPointerEvents="all"
        onChange={(event) => setClear(event.currentTarget.value)}
        rightSection={
          <Flex>
            <ActionIcon
              size={42}
              color="gray"
              variant="transparent"
              onClick={() => setClear("")}
              style={{ display: clear ? undefined : "none" }}
            >
              <Icons.CloseButton />
            </ActionIcon>

            <Popover
              transitionProps={{ transition: "pop", duration: 150 }}
              width={300}
              radius={16}
              position="bottom"
              withArrow
              arrowPosition="side"
              shadow="md"
            >
              <Popover.Target>
                <Button c="gray" variant="transparent" radius={12}>
                  Фильтры
                  <Icons.IconAdjustments />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Select
                  label="По времени"
                  defaultValue="За все время" //дефалт велью должен меняться
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "За все время",
                    "За год",
                    "За месяц",
                    "За неделю",
                    "За день",
                  ]}
                />
                <Select
                  label="По филиалам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Филиал 1",
                    "Филиал 2",
                    "Филиал 3",
                    "Филиал 4",
                    "Филиал 5",
                    "Филиал 6",
                  ]}
                />
                <Select
                  label="По просмотрам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Больше всего просмотров",
                    "Меньше всего просмотров",
                  ]}
                />
                <Select
                  label="По лайкам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={["Все", "Больше всего лайков", "Меньше всего лайков"]}
                />
                <Select
                  label="По комментариям"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Больше всего комментариве",
                    "Меньше всего комментариев",
                  ]}
                />
                <Select
                  label="По статусу"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Опубликована",
                    "На рассмотрении",
                    "На формировании итогового экспертного заключения",
                    "Одобрена",
                    "На внедрении",
                    "Внедрена",
                    "На доработке",
                    "Отложена",
                    "Отклонена",
                  ]}
                />
                <Select
                  label="По бизнес процессу"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Предложение по улучшению",
                    "Рационализаторское предложение",
                    "Лучшая практика",
                  ]}
                />
              </Popover.Dropdown>
            </Popover>

            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />
      <ScrollArea
        h={516}
        mt={20}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        classNames={{ scrollbar: classes.scroll }}
      >
        <Table highlightOnHover stickyHeader verticalSpacing="xs">
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
            <ShowIdeas />
          </Table.Tbody>
        </Table>
        <Center>
          <Loader size={50} />
        </Center>
      </ScrollArea>
    </Container>
  );
}

export default Search;
