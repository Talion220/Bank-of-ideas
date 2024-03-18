import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { AppShell, RemoveScroll } from "@mantine/core";
import clsx from "clsx";
import classes from "./layout.module.css";

function Layout() {
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header className={clsx(RemoveScroll.classNames.zeroRight)}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>
          <Outlet />
        </div>
      </AppShell.Main>
      <AppShell.Footer className={classes.footer}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;
