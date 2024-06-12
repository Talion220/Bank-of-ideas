import classes from "./search.module.css";
import ShowIdeas from "../../features/ideas/showIdeas/ShowIdeas";
import { useEffect, useRef, useState } from "react";
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
  SimpleGrid,
  Skeleton,
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
  const prevPage = useRef(1);

  const viewport = useRef(null);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = viewport.current;
    if (
      viewport.current &&
      scrollTop + clientHeight >= scrollHeight - 50 &&
      prevPage.current === currentPage &&
      totalIdeas > currentPage * limitIdeas &&
      !AllIdeasLoading
    ) {
      setCurrentPage((val) => val + 1);
      prevPage.current = currentPage + 1;
    }
  }

  const getData = async () => {
    try {
      await getAllIdeas(
        currentPage,
        inputValue,
        selectTime,
        selectCategory,
        selectFilials,
        selectViews,
        selectLikes,
        selectComments,
        selectStatus,
        selectBusinessProcess
      );
      if (inputPrevValue !== inputValue) {
        setCurrentPage(1);
        prevPage.current = 1;
      }
      setInputPrevValue(inputValue);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectTime, setSelectTime] = useState("Все");
  const [selectCategory, setSelectCategory] = useState("Все");
  const [selectFilials, setSelectFilials] = useState("Все");
  const [selectViews, setSelectViews] = useState("Все");
  const [selectLikes, setSelectLikes] = useState("Все");
  const [selectComments, setSelectComments] = useState("Все");
  const [selectStatus, setSelectStatus] = useState("Все");
  const [selectBusinessProcess, setSelectBusinessProcess] = useState("Все");

  useEffect(() => {
    getData();
  }, [
    currentPage,
    inputValue,
    selectTime,
    selectCategory,
    selectFilials,
    selectViews,
    selectLikes,
    selectComments,
    selectStatus,
    selectBusinessProcess,
  ]);

  return (
    <Container size="xl" mt={40}>
      <Flex justify="space-between" wrap="wrap">
        <div>
          <Title>Изучайте идеи компании</Title>
          <Text mt={20} c="dimmed">
            Всего идей найдено: {totalIdeas}
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
        rightSectionWidth={inputValue ? 230 : 188}
        leftSection={<Icons.IconSearch />}
        value={inputValue}
        rightSectionPointerEvents="all"
        onChange={(event) => setInputValue(event.currentTarget.value)}
        rightSection={
          <Flex>
            <ActionIcon
              size={42}
              color="gray"
              variant="transparent"
              onClick={() => setInputValue("")}
              style={{ display: inputValue ? undefined : "none" }}
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
                <Button
                  c={
                    selectTime !== "Все" ||
                    selectCategory !== "Все" ||
                    selectFilials !== "Все" ||
                    selectViews !== "Все" ||
                    selectLikes !== "Все" ||
                    selectComments !== "Все" ||
                    selectStatus !== "Все" ||
                    selectBusinessProcess !== "Все"
                      ? "blue"
                      : "gray"
                  }
                  variant="transparent"
                  radius={12}
                >
                  Фильтры
                  <Icons.IconAdjustments />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Select
                  label="По времени"
                  value={selectTime}
                  onChange={setSelectTime}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={["Все", "За год", "За месяц", "За неделю", "За день"]}
                />
                <Select
                  label="По категории"
                  value={selectCategory}
                  onChange={setSelectCategory}
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
                <Select
                  label="По филиалам"
                  value={selectFilials}
                  onChange={setSelectFilials}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "ИА",
                    "Алтайэнерго",
                    "Бурятэнерго",
                    "Красноярскэнерго",
                    "Кузбассэнерго-РЭС",
                    "Омскэнерго",
                    "Хакасэнерго",
                    "Читаэнерго",
                    "Тываэнерго",
                  ]}
                />
                <Select
                  label="По просмотрам"
                  value={selectViews}
                  onChange={setSelectViews}
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
                  value={selectLikes}
                  onChange={setSelectLikes}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={["Все", "Больше всего лайков", "Меньше всего лайков"]}
                />
                <Select
                  label="По комментариям"
                  value={selectComments}
                  onChange={setSelectComments}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Больше всего комментариев",
                    "Меньше всего комментариев",
                  ]}
                />
                <Select
                  label="По статусу"
                  value={selectStatus}
                  onChange={setSelectStatus}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Опубликовано",
                    "На рассмотрении",
                    "На формировании итогового экспертного заключения",
                    "Одобрено",
                    "На внедрении",
                    "Внедрено",
                    "На доработке",
                    "Отложено",
                    "Отклонено",
                  ]}
                />
                <Select
                  label="По бизнес процессу"
                  value={selectBusinessProcess}
                  onChange={setSelectBusinessProcess}
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  radius={16}
                  data={[
                    "Все",
                    "Бизнес-процесс 1",
                    "Бизнес-процесс 2",
                    "Бизнес-процесс 3",
                    "Бизнес-процесс 4",
                    "Бизнес-процесс 5",
                    "Бизнес-процесс 6",
                    "Бизнес-процесс 7",
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
      {AllIdeasLoading && allIdeasData.length === 0 ? (
        <SimpleGrid mt={30} cols={{ base: 1, sm: 1 }}>
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
          <Skeleton h={60} maw={1288} radius={16} />
        </SimpleGrid>
      ) : totalIdeas === 0 ? (
        <Text mt={200} c="dimmed" align="center" size="xl">
          Идеи не найдены...
        </Text>
      ) : (
        <ScrollArea
          viewportRef={viewport}
          h={516}
          mt={20}
          onScrollPositionChange={handleScroll}
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
              <ShowIdeas from="search" />
            </Table.Tbody>
          </Table>
          {totalIdeas < currentPage * limitIdeas ? null : (
            <Center>
              <Loader size={50} />
            </Center>
          )}
        </ScrollArea>
      )}
    </Container>
  );
}

export default Search;
