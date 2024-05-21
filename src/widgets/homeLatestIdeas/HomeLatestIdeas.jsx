import {
  Anchor,
  Avatar,
  Divider,
  Flex,
  Group,
  Table,
  Text,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./homeLatestIdeas.module.css";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import { Icons } from "../../shared/images/Icons";
import formatDate from "../../features/date/date";

export default function HomeLatestIdeas({ article }) {
  const date = formatDate(article.date);
  return (
    <Table.Tr>
      <Table.Td>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
        >
          {/* <Group gap="xs" wrap="nowrap">
            <Avatar size={20} src={article.avatar} /> */}
          <Text size="sm">{article.author}</Text>
          {/* </Group> */}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor
          component={NavLink}
          to={`/idea/${article.id}`}
          onClick={() => {
            scrollToTop();
          }}
          underline="hover"
          className={classes.subLink}
          aria-label={article.title}
        >
          <Text fw={500} fz="md">
            {article.title}
          </Text>
        </Anchor>
      </Table.Td>
    </Table.Tr>

    // <Group pt={15} wrap="nowrap" gap="xs">

    //   <Text size="sm" c="dimmed">
    //     •
    //   </Text>
    //   <Text size="sm" c="dimmed">
    //     {article.businessProcess}
    //   </Text>
    //   <Text size="sm" c="dimmed">
    //     •
    //   </Text>
    //   <Text size="sm" c="dimmed">
    //     {date}
    //   </Text>
    //   <Text size="xs" c="dimmed">
    //     •
    //   </Text>
    //   <Flex align="center" gap={5} size="xs" c="dimmed">
    //     <Icons.IconEye />
    //     <Text size="xs">{article.views}</Text>
    //   </Flex>
    // </Group>
  );
}
