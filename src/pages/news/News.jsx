import classes from "./news.module.css";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Autocomplete,
  ActionIcon,
  Flex,
  Anchor,
  Avatar,
  Text,
  SimpleGrid,
  Card,
  Image,
  AspectRatio,
  Group,
  Center,
  Divider,
  Button,
  Pagination,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import useNewsStore from "../../data/stores/useNewsStore";
import Like from "../../widgets/ideasAndNewsPage/like/Like";

function News() {
  const { getAllNews } = useNewsStore((state) => ({
    getAllNews: state.getAllNews,
  }));

  const [inputValue, setInputValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllNews(currentPage, limit, inputValue);
        setData(res.posts);
        setTotal(res.total);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
    console.log(currentPage);
  }, [currentPage, inputValue]);

  const cards = data.map((article) => (
    <Card key={article.id} m={0} p="md" radius={16} className={classes.card}>
      <AspectRatio
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        ratio={1920 / 1080}
      >
        <Image radius={16} src={article.newsImg} />
      </AspectRatio>

      <Anchor
        mt={10}
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        className={classes.link}
      >
        <Text fw="bold" lineClamp={1}>
          {article.title}
        </Text>
      </Anchor>

      <Flex gap="sm" wrap="wrap" align="center" mt={5}>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
          className={classes.link}
        >
          <Flex align="center">
            <Avatar size={20} src={article.avatar} />
            <Text pl={10}>{article.author}</Text>
          </Flex>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {article.date}
        </Text>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Flex align="center" gap={5} size="sm" c="dimmed">
          <Icons.IconEye />
          <Text size="sm">{article.views}</Text>
        </Flex>
      </Flex>

      <Group mt={10} gap="lg">
        <Like id={article.id} />
        <Center>
          <Button
            variant="light"
            c="gray"
            radius="16"
            color="blue"
            component={NavLink}
            to={`/news/${article.id}?fromLink=true`}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Flex align="center" gap={3}>
              <Icons.IconMessageCircle />
              <Text>{article.comments.length}</Text>
            </Flex>
          </Button>
        </Center>
      </Group>

      <Divider mt="sm" />

      <Group wrap="nowrap" gap="xs" mt="xs">
        <Anchor
          component={NavLink}
          to={`/profile`}
          onClick={() => {
            scrollToTop();
          }}
          className={classes.link}
        >
          <Group gap="sm" wrap="nowrap">
            <Avatar size={20} src={article.avatar} />
            <Text size="sm" fw="500">
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          24 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>

      <Group wrap="nowrap" gap="xs" mt="xs">
        <Anchor
          component={NavLink}
          to={`/profile`}
          onClick={() => {
            scrollToTop();
          }}
          className={classes.link}
        >
          <Group gap="sm" wrap="nowrap">
            <Avatar size={20} src={article.avatar} />
            <Text size="sm" fw="500">
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          18 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>
    </Card>
  ));

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
                const getData = async () => {
                  try {
                    const res = await getAllNews(
                      currentPage,
                      limit,
                      inputValue
                    );
                    setData(res.posts);
                    setTotal(res.total);
                  } catch (error) {
                    console.error("Error:", error);
                  }
                };
                getData();
              }}
            >
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
      />

      <SimpleGrid mt={30} cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
      <Flex justify="flex-start" mt={30}>
        <Pagination
          total={Math.ceil(total / limit)}
          boundaries={3}
          defaultValue={currentPage}
          onChange={(page) => {
            scrollToTop();
            setCurrentPage(page);
          }}
        />
      </Flex>
    </Container>
  );
}

export default News;
