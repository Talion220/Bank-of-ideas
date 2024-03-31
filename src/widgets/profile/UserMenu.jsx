import {
  UnstyledButton,
  Badge,
  AppShell,
  Container,
  Text,
  Skeleton,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "./userMenu.module.css";

const links = [
  { label: "Мои идеи" },
  { label: "Мои предложения по улучшению" },
  { label: "Мои лучшие практики" },
  { label: "Мои рационализаторские предложения" },
  { label: "Уведомления", notifications: 3 },
];

function UserMenu() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState("Мои идеи");

  const mainLinks = links.map((link) => (
    <UnstyledButton
      onClick={() => setActive(link.label)}
      key={link.label}
      className={classes.mainLink}
    >
      <div className={classes.mainLinkInner}>
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  return (
    <AppShell
      navbar={{ breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <nav className={classes.navbar}>
          <div className={classes.section}>
            <div className={classes.mainLinks}>{mainLinks}</div>
          </div>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default UserMenu;
