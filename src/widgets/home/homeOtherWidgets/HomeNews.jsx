import { NavLink } from "react-router-dom";
import newsImg from "../../../shared/images/newsImg.jpg";
import classes from "./homeNews.module.css";
import scrollToTop from "../../../shared/utilits/ScrollToTop";

import { Table, Anchor, Image, Text, Group, Title, Flex } from "@mantine/core";

const data = [
  {
    id: "1",
    title: "Foundation",
    cover: newsImg,
  },
  {
    id: "2",
    title: "Frankenstein",
    cover: newsImg,
  },
  {
    id: "3",
    title: "Solaris",
    cover: newsImg,
  },
  {
    id: "4",
    title: "Dune",
    cover: newsImg,
  },
  {
    id: "5",
    title: "The Left Hand of Darkness",
    cover: newsImg,
  },
];

function HomeNews() {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>
          <Anchor
            component={NavLink}
            to={`/news/${row.id}`}
            underline="hover"
            className={classes.subLink}
            aria-label={row.title}
            onClick={scrollToTop}
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
