import { Anchor, Avatar, Flex, Table, Text, Tooltip } from "@mantine/core";
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
              <Tooltip
                color="gray.3"
                multiline
                position="top-start"
                transitionProps={{
                  transition: "pop-bottom-left",
                  duration: 200,
                }}
                c="black"
                label={article.author}
              >
                <Text fw={500} fz="md" maw={280} truncate="end">
                  {article.author}
                </Text>
              </Tooltip>
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
          <Tooltip
            color="gray.3"
            multiline
            position="top-start"
            transitionProps={{ transition: "pop-bottom-left", duration: 200 }}
            c="black"
            label={article.title}
          >
            <Text fw={500} fz="md" maw={180} truncate="end">
              {article.title}
            </Text>
          </Tooltip>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Tooltip
          color="gray.3"
          multiline
          position="top-start"
          transitionProps={{ transition: "pop-bottom-left", duration: 200 }}
          c="black"
          label={article.status}
        >
          <Text fw={500} fz="md" maw={180} truncate="end">
            {article.status}
          </Text>
        </Tooltip>
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
