import { NavLink } from "react-router-dom";
import NewsCover from "../../../shared/images/NewsCover.png";
import classes from "./homeNews.module.css";

import { Table, Anchor, Image, Text, Group, Title, Flex } from "@mantine/core";

const data = [
  {
    title: "Foundation",
    cover: NewsCover,
    link: "/news/1",
  },
  {
    title: "Frankenstein",
    cover: NewsCover,
    link: "/news/2",
  },
  {
    title: "Solaris",
    cover: NewsCover,
    link: "/news/3",
  },
  {
    title: "Dune",
    cover: NewsCover,
    link: "/news/4",
  },
  {
    title: "The Left Hand of Darkness",
    cover: NewsCover,
    link: "/news/5",
  },
];

function HomeNews() {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor
            component={NavLink}
            to={row.link}
            underline="hover"
            className={classes.subLink}
            aria-label={row.title}
          >
            <Flex align="center">
              <Image h={38} src={row.cover} radius="md" mr={10} />
              <Text fw={500} fz="md">
                {row.title}
              </Text>
            </Flex>
          </Anchor>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    // <Flex direction="column" align="center">
    <Table.ScrollContainer pr={20}>
      <Table verticalSpacing="xs" maw={600}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Title pb={15}>Новости</Title>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    //</Flex>
  );
}

export default HomeNews;
