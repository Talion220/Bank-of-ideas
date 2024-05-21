import { NavLink } from "react-router-dom";
import classes from "./homeIdeas.module.css";
import avatar from "../../../../shared/images/avatar.png";
import scrollToTop from "../../../../shared/utilities/ScrollToTop";

import {
  Table,
  Progress,
  Anchor,
  Avatar,
  Text,
  Group,
  Title,
  Flex,
} from "@mantine/core";

const data = [
  {
    id: "1",
    title: "Foundation",
    author: "Isaac Asimov",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "2",
    title: "Frankenstein",
    author: "Mary Shelley",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "3",
    title: "Solaris",
    author: "Stanislaw Lem",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "4",
    title: "Dune",
    author: "Frank Herbert",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "5",
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    avatar: avatar,
    linkAuthor: "/profile",
  },
];

function HomeIdeas() {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor
            component={NavLink}
            to={row.linkAuthor}
            underline="hover"
            className={classes.subLink}
            aria-label={row.title}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Flex align="center">
              <Avatar src={row.avatar} mr={10} />
              <Text fw={500} fz="md">
                {row.author}
              </Text>
            </Flex>
          </Anchor>
        </Table.Td>

        <Table.Td>
          <Anchor
            component={NavLink}
            to={`/idea/${row.id}`}
            onClick={() => {
              scrollToTop();
            }}
            underline="hover"
            className={classes.subLink}
            aria-label={row.title}
          >
            <Text fw={500} fz="md">
              {row.title}
            </Text>
          </Anchor>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    // <Flex direction="column" align="center">

    <Table.ScrollContainer>
      <Table verticalSpacing="xs" maw={600}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Title pb={15}>Последние идеи</Title>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    //</Flex>
  );
}

export default HomeIdeas;
