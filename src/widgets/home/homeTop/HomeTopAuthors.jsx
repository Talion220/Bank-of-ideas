import avatar from "../../../shared/images/avatar.png";
import styles from "./homeTopAll.module.css";
import { NavLink } from "react-router-dom";

import { Avatar, Table, Group, Text, Center, Title, Flex } from "@mantine/core";

const topAuthors = [
  {
    avatar: avatar,
    name: "Кузнецова Анна Евгеньевна",
    count: "1244",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    name: "Петрова Евгения Васильевна",
    count: "1144",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Иванов Иван Иванович",
    count: "976",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Сидоров Василий Григорьевич",
    count: "934",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Фомин Денис Сергеевич",
    count: "924",
  },
];

function HomeTopAuthors() {
  const rows = topAuthors.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <Text className={styles.text}>{item.name}</Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text className={styles.text}>{item.count}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex align="center" direction="column">
      <Title pb="xl">Топ авторов</Title>
      <Center>
        <Table.ScrollContainer maw={700}>
          <Table verticalSpacing="sm" horizontalSpacing="md" highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th fz="lg">Пользователь</Table.Th>
                <Table.Th fz="lg">Всего идей</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Center>
    </Flex>
  );
}

export default HomeTopAuthors;
