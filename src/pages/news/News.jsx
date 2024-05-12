import scrollToTop from "../../shared/utilities/ScrollToTop";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  TextInput,
  ActionIcon,
  Flex,
  SimpleGrid,
  Pagination,
  Skeleton,
  Text,
} from "@mantine/core";
import { Icons } from "../../shared/images/Icons";
import useNewsStore from "../../data/stores/useNewsStore";
import ShowNews from "../../features/news/ShowNews";

function News() {
  const { getAllNews, AllNewsLoading, allNewsData } = useNewsStore((state) => ({
    getAllNews: state.getAllNews,
    AllNewsLoading: state.AllNewsLoading,
    allNewsData: state.allNewsData,
  }));

  const [inputValue, setInputValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const [inputQueryValue, setInputQueryValue] = useState("");

  const getData = async () => {
    try {
      const res = await getAllNews(currentPage, limit, inputValue);
      setTotal(res.total);
      // console.log(total);
      // console.log(currentPage * limit);
      if (inputQueryValue !== inputValue) {
        setCurrentPage(1);
      }
      setInputQueryValue(inputValue);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, inputValue]);

  return (
    <Container size="xl" mt={40}>
      <Title pb={30}>Новости компании</Title>
      <TextInput
        radius="xl"
        size="xl"
        placeholder="Искать новости..."
        rightSectionWidth={inputValue ? 102 : 60}
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
            <ActionIcon
              size={42}
              radius="xl"
              variant="filled"
              onClick={() => {
                getData();
              }}
            >
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />

      {AllNewsLoading ? (
        <Container size="xl" mt={40}>
          <SimpleGrid mt={30} cols={{ base: 1, sm: 2 }}>
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
            <Skeleton h={605} maw={604} radius={16} />
          </SimpleGrid>
        </Container>
      ) : total === 0 ? (
        <Container size="xl" mt={40}>
          <Text mt={200} c="dimmed" v align="center" size="xl">
            Новости не найдены...
          </Text>
        </Container>
      ) : (
        <>
          <SimpleGrid mt={30} cols={{ base: 1, sm: 2 }}>
            <ShowNews />
          </SimpleGrid>
          <Flex justify="flex-start" mt={30}>
            <Pagination
              total={Math.ceil(total / limit)}
              boundaries={3}
              defaultValue={1}
              value={currentPage}
              onChange={(page) => {
                scrollToTop();
                setCurrentPage(page);
              }}
            />
          </Flex>
        </>
      )}
    </Container>
  );
}

export default News;
