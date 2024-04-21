import classes from "./news.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import scrollToAnchor from "../../shared/utilits/ScrollToAnchor";
import { useState } from "react";
import {
  Container,
  Title,
  TextInput,
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
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import newsImg from "../../shared/images/newsImg.jpg";
import avatar from "../../shared/images/avatar.png";
import { useScrollIntoView } from "@mantine/hooks";

const data = [
  {
    id: "1",
    author: "Павлова Мария Алиевна",
    avatar: avatar,
    title: "Foundation",
    likes: "12",
    comments: "2",
    views: "34",
    newsImg:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "2",
    author: "Токарева Варвара Вячеславовна",
    avatar: avatar,
    title: "Frankenstein",
    likes: "25",
    comments: "4",
    views: "86",
    newsImg:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "3",
    author: "Куликова Вера Даниэльевна",
    avatar: avatar,
    title: "Solaris",
    likes: "65",
    comments: "14",
    views: "125",
    newsImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "4",
    author: "Быков Григорий Богданович",
    avatar: avatar,
    title: "Dune",
    likes: "4",
    comments: "0",
    views: "6",
    newsImg:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "5",
    author: "Климова Алина Марсельевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "6",
    author: "Соколова Александра Ивановна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "7",
    author: "Громов Павел Германович",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "8",
    author: "Моисеева Маргарита Кирилловна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "9",
    author: "Гаврилова Екатерина Марковна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
  {
    id: "10",
    author: "Кононова Таисия Алиевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "18 апреля 2024",
  },
];
function News(props) {
  const [clear, setClear] = useState("");

  const cards = data.map((article) => (
    <Card key={article.id} m="md" p={0} className={classes.card}>
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
        <Center>
          <Button
            variant="light"
            // c={liked ? "red" : "gray"}
            radius="16"
            color="blue"
            onClick={() => {
              // setLiked.toggle();
            }}
          >
            <Flex align="center" gap={3}>
              <Icons.IconLike />
              <Text>{article.likes}</Text>
            </Flex>
          </Button>
        </Center>
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
              <Text>{article.comments}</Text>
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
            <Avatar size={20} src={avatar} />
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
            <Avatar size={20} src={avatar} />
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
        rightSectionWidth={clear ? 102 : 60}
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
            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
        {...props}
      />

      <SimpleGrid mt={30} cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default News;
