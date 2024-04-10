import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

function AnalyticsShell() {
  return (
    <Container size="xl" mt={40}>
      <Outlet />
    </Container>
  );
}

export default AnalyticsShell;
