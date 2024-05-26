import {
  Text,
  Avatar,
  Group,
  Flex,
  Anchor,
  Button,
  Stack,
  Table,
  Title,
  SegmentedControl,
  ScrollArea,
  Container,
  Center,
  Loader,
  SimpleGrid,
  Skeleton,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./profile.module.css";
import avatar from "../../shared/images/avatar.png";
import { Icons } from "../../shared/images/Icons";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import ShowIdeas from "../../features/ideas/showIdeas/ShowIdeas";
import { useEffect, useRef, useState } from "react";
import useIdeasStore from "../../data/stores/useIdeasStore";

function Profile() {
  const {
    getProfileIdeas,
    AllIdeasProfileLoading,
    limitIdeas,
    allIdeasProfileData,
    totalIdeasProfile,
  } = useIdeasStore((state) => ({
    getProfileIdeas: state.getProfileIdeas,
    AllIdeasProfileLoading: state.AllIdeasProfileLoading,
    allIdeasProfileData: state.allIdeasProfileData,
    totalIdeasProfile: state.totalIdeasProfile,
    limitIdeas: state.limitIdeas,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = useRef(1);

  const viewport = useRef(null);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = viewport.current;
    if (
      viewport.current &&
      scrollTop + clientHeight >= scrollHeight - 50 &&
      prevPage.current === currentPage &&
      totalIdeasProfile > currentPage * limitIdeas &&
      !AllIdeasProfileLoading
    ) {
      setCurrentPage((val) => val + 1);
      prevPage.current = currentPage + 1;
    }
  }

  const getData = async () => {
    try {
      await getProfileIdeas(currentPage, selectCategory);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectCategory, setSelectCategory] = useState("Все");

  useEffect(() => {
    getData();
  }, [currentPage, selectCategory]);

  return (
    <Container size="xl">
      <Stack mt={40}>
        <Flex
          justify="space-between"
          align="center"
          className={classes.section}
        >
          <Group wrap="nowrap">
            <Avatar src={avatar} size={94} />
            <div>
              <Text fz="xl" fw={600} className={classes.name}>
                Иванов Иван Иванович
              </Text>
              <Text fz="md" fw={500}>
                Генеральный директор
              </Text>
              <Text fz="sm" fw={700} c="gray">
                Красноярскэнерго
              </Text>
            </div>
          </Group>

          <Button
            radius={16}
            component={NavLink}
            to="alerts"
            className={classes.btn}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Icons.Alert />
            <Text>Уведомления</Text>
          </Button>
        </Flex>

        <SegmentedControl
          className={classes.navbar}
          fullWidth
          mt={20}
          color="blue"
          value={selectCategory}
          onChange={setSelectCategory}
          data={[
            "Все",
            "Предложение по улучшению",
            "Лучшая практика",
            "Рационализаторское предложение",
          ]}
        />
        {AllIdeasProfileLoading && allIdeasProfileData.length === 0 ? (
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
        ) : totalIdeasProfile === 0 ? (
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
            <Table highlightOnHover stickyHeader verticalSpacing="lg">
              <Table.Thead>
                <Table.Tr>
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
                <ShowIdeas from="profile" />
              </Table.Tbody>
            </Table>
            {totalIdeasProfile < currentPage * limitIdeas ? null : (
              <Center>
                <Loader size={50} />
              </Center>
            )}
          </ScrollArea>
        )}
      </Stack>
    </Container>
  );
}

export default Profile;
