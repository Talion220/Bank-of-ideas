import { Anchor, Avatar, Flex, Table, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./ideasCard.module.css";
import scrollToTop from "../../../shared/utilities/ScrollToTop";

function IdeasCard({ article, from }) {
  return (
    <Table.Tr>
      {from === "profile" ? null : (
        <Table.Td>
          <Anchor
            component={NavLink}
            to={article.linkAuthor}
            underline="hover"
            className={classes.subLink}
            aria-label={article.title}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Flex align="center">
              <Avatar src={article.avatar} mr={10} />
              <Text fw={500} fz="md">
                {article.author}
              </Text>
            </Flex>
          </Anchor>
        </Table.Td>
      )}
      <Table.Td>
        <Anchor
          component={NavLink}
          to={`/idea/${article.id}`}
          underline="hover"
          className={classes.subLink}
          aria-label={article.title}
          onClick={() => {
            scrollToTop();
          }}
        >
          <Text fw={500} fz="md">
            {article.title}
          </Text>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {article.status}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {article.likes}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {article.comments.length}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fw={500} fz="md">
          {article.views}
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default IdeasCard;
