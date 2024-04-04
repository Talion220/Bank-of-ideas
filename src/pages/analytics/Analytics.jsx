import classes from "./analytics.module.css";
import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";

function Analytics() {
  return (
    <Container size="xl" mt={40}>
      <Outlet />
    </Container>
  );
}

export default Analytics;
