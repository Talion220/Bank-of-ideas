import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";
import newsImg from "../../shared/images/newsImg.jpg";
import { useParams, NavLink } from "react-router-dom";
import {
  Title,
  Text,
  Container,
  Image,
  AspectRatio,
  Avatar,
  Flex,
  Anchor,
} from "@mantine/core";

import classes from "./NewsPage.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";

const data = [
  {
    id: "1",
    author: "Павлова Мария Алиевна",
    avatar: avatar,
    title: "Foundation",
    text: "Lorem ipsum",
    likes: "12",
    comments: "2",
    views: "34",
    newsImg:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "2",
    author: "Токарева Варвара Вячеславовна",
    avatar: avatar,
    title: "Frankenstein",
    text: "Lorem ipsum",
    likes: "25",
    comments: "4",
    views: "86",
    newsImg:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "3",
    author: "Куликова Вера Даниэльевна",
    avatar: avatar,
    title: "Solaris",
    text: "Lorem ipsum",
    likes: "65",
    comments: "14",
    views: "125",
    newsImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "4",
    author: "Быков Григорий Богданович",
    avatar: avatar,
    title: "Dune",
    text: "Lorem ipsum",
    likes: "4",
    comments: "0",
    views: "6",
    newsImg:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "5",
    author: "Климова Алина Марсельевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "6",
    author: "Соколова Александра Ивановна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "7",
    author: "Громов Павел Германович",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "8",
    author: "Моисеева Маргарита Кирилловна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "9",
    author: "Гаврилова Екатерина Марковна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
  {
    id: "10",
    author: "Кононова Таисия Алиевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    date: "11 апреля 2024",
  },
];

function NewsPage() {
  const { id } = useParams();
  const news = data.find((idea) => idea.id === id);
  return (
    <Container size="xl" mt={40}>
      <Title>{news.title}</Title>

      <Flex gap="sm" align="center">
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={scrollToTop}
          c="dark"
          className={classes.link}
        >
          <Flex align="center">
            <Avatar size={20} src={news.avatar} />
            <Text pl={10}>{news.author}</Text>
          </Flex>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {news.date}
        </Text>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Flex align="center" gap={5} size="sm" c="dimmed">
          <Icons.IconEye />
          <Text>{news.views}</Text>
        </Flex>
      </Flex>

      <Flex align="center">
        <Icons.IconLike />
        {news.likes}
      </Flex>
      <Flex align="center">
        <Icons.IconMessageCircle />
        {news.comments}
      </Flex>

      <AspectRatio ratio={1920 / 1080} mah={400}>
        <Image src={news.newsImg} radius={16} />
      </AspectRatio>

      <p>{news.text}</p>
    </Container>
  );
}

export default NewsPage;
