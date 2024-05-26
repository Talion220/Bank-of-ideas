import { Button, Flex, Text } from "@mantine/core";
import classes from "./analytics.module.css";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../shared/utilities/ScrollToTop";

export default function AnalyticsCard({ data }) {
  return (
    <Flex
      className={classes.stat}
      direction="column"
      align="start"
      justify="space-between"
    >
      <div>
        <Text className={classes.count}>{data.stats}</Text>
        <Text className={classes.title}>{data.title}</Text>
        <Text className={classes.description}>{data.description}</Text>
      </div>
      <Button
        component={NavLink}
        to={data.link}
        onClick={() => {
          scrollToTop();
        }}
        mt={"var(--mantine-spacing-md)"}
        c="blue"
        bg="white"
        radius={12}
      >
        Подробнее...
      </Button>
    </Flex>
  );
}
