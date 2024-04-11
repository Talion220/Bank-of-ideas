import classes from "./news.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";
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
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import newsImg from "../../shared/images/newsImg.jpg";
import avatar from "../../shared/images/avatar.png";

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
  },
];
function News(props) {
  const [clear, setClear] = useState("");

  const cards = data.map((article) => (
    <Card
      key={article.id}
      p="md"
      radius={16}
      component={NavLink}
      to={`/news/${article.id}`}
      onClick={scrollToTop}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image radius={16} src={article.newsImg} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Group justify="space-between" gap="xs">
        <Group gap="sm" wrap="nowrap">
          <Avatar size={20} src={article.avatar} />
          <Text size="sm" className={classes.author}>
            {article.author}
          </Text>
        </Group>

        <Group gap="lg">
          <Center>
            <Icons.IconLike />
            <Text size="sm" className={classes.bodyText}>
              {article.likes}
            </Text>
          </Center>
          <Center>
            <Icons.IconMessageCircle />
            <Text size="sm" className={classes.bodyText}>
              {article.comments}
            </Text>
          </Center>
          <Center>
            <Icons.IconEye />
            <Text size="sm" className={classes.bodyText}>
              {article.views}
            </Text>
          </Center>
        </Group>
      </Group>

      <Divider my="sm" />

      <Group wrap="nowrap" gap="xs">
        <Group gap="sm" wrap="nowrap">
          <Avatar
            size={20}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          />
          <Text size="sm">Иванова Анна Сергеевна</Text>
        </Group>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          Feb 6th
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

      <Group mt="xs" wrap="nowrap" gap="xs">
        <Group gap="xs" wrap="nowrap">
          <Avatar
            size={20}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          />
          <Text size="sm">Петрова Екатерина Владимировна</Text>
        </Group>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          Feb 6th
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
