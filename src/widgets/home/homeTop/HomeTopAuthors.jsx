import avatar from "../../../shared/images/avatar.png";
import styles from "./homeTopAll.module.css";
import { NavLink } from "react-router-dom";

import { Avatar, Badge, Table, Group, Text, Select } from "@mantine/core";

const topAuthors = [
  {
    avatar: avatar,
    name: "Кузнецова Анна Евгеньевна",
    count: "1244",
    top: "1",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    name: "Петрова Евгения Васильевна",
    count: "1144",
    top: "2",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Иванов Иван Иванович",
    count: "976",
    top: "3",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Сидоров Василий Григорьевич",
    count: "934",
    top: "4",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Фомин Денис Сергеевич",
    count: "924",
    top: "5",
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

function HomeTopAuthors() {
  const rows = topAuthors.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>{item.top}</Table.Td>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>{item.count}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer maw={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Топ</Table.Th>
            <Table.Th>Пользователь</Table.Th>
            <Table.Th>Всего идей</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

export default HomeTopAuthors;
