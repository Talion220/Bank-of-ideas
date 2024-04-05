import classes from "./news.module.css";
import scrollToTop from "../../shared/utilits/ScrollToTop";
import { useState } from "react";
import {
  Container,
  Title,
  ScrollArea,
  TextInput,
  ActionIcon,
  Table,
  Flex,
  Anchor,
  Avatar,
  Popover,
  Button,
  Select,
  Text,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import newsImg from "../../shared/images/newsImg.jpg";

const data = [
  {
    id: "1",
    author: "Isaac Asimov",
    title: "Foundation",
    likes: "12",
    comments: "2",
    views: "34",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/1",
  },
  {
    id: "2",
    author: "Mary Shelley",
    title: "Frankenstein",
    likes: "25",
    comments: "4",
    views: "86",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/2",
  },
  {
    id: "3",
    author: "Stanislaw Lem",
    title: "Solaris",
    likes: "65",
    comments: "14",
    views: "125",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/3",
  },
  {
    id: "4",
    author: "Frank Herbert",
    title: "Dune",
    likes: "4",
    comments: "0",
    views: "6",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/4",
  },
  {
    id: "5",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/5",
  },
  {
    id: "6",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/6",
  },
  {
    id: "7",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/7",
  },
  {
    id: "8",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/8",
  },
  {
    id: "9",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/9",
  },
  {
    id: "10",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
    linkNews: "/news/10",
  },
];
function News(props) {
  const [clear, setClear] = useState("");

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
    </Container>
  );
}

export default News;
