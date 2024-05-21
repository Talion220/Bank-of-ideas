import avatar from "../../../../shared/images/avatar.png";
import styles from "./homeTopAll.module.css";
import { NavLink } from "react-router-dom";

import scrollToTop from "../../../../shared/utilities/ScrollToTop";

import {
  Avatar,
  Table,
  Group,
  Text,
  Anchor,
  Title,
  Flex,
  Divider,
  Center,
} from "@mantine/core";

const topAuthors = [
  {
    avatar: avatar,
    name: "Кузнецова Анна Евгеньевна",
    // count: "1244",
    link: "/profile",
  },
  {
    avatar: avatar,
    name: "Петрова Евгения Васильевна",
    // count: "1144",
    link: "/profile",
  },
  {
    avatar: avatar,
    name: "Иванов Иван Иванович",
    // count: "976",
    link: "/profile",
  },
  {
    avatar: avatar,
    name: "Сидоров Василий Григорьевич",
    // count: "934",
    link: "/profile",
  },
  {
    avatar: avatar,
    name: "Фомин Денис Сергеевич",
    // count: "924",
    link: "/profile",
  },
];

function HomeTopAuthors() {
  const rows = topAuthors.map((item) => (
    <Anchor
      key={item.name}
      component={NavLink}
      to={item.link}
      underline="hover"
      className={styles.subLink}
      aria-label={item.title}
      onClick={() => {
        scrollToTop();
      }}
    >
      <Divider my="sm" />
      <Group gap="sm">
        <Avatar size={40} src={item.avatar} radius={40} />
        <Text className={styles.text}>{item.name}</Text>
      </Group>
    </Anchor>
  ));

  return (
    <Center mt={50}>
      <Flex align="start" direction="column">
        {rows}
      </Flex>
    </Center>
  );
}

export default HomeTopAuthors;
