import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Flex,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./header.module.css";

import { Icons } from "../../../shared/images/Icons";
import lamp from "../../../shared/images/lamp.svg";
import avatar from "../../../shared/images/avatar.png";
import { NavLink } from "react-router-dom";

const links = [
  { link: "/", label: "Главная" },
  {
    link: "/search",
    label: "Идеи",
    links: [
      { link: "/do-you-have-an-idea", label: "У вас есть идея?" },
      { link: "/idea-create", label: "Создать идею" },
      { link: "/search", label: "Наша база идей" },
    ],
  },
  { link: "/news", label: "Новости" },
  {
    link: "/",
    label: "Другое",
    links: [
      { link: "/analytics", label: "Аналитика" },
      { link: "/documentation", label: "Документация" },
    ],
  },
  { link: "/profile", label: "Профиль" },
];

function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <NavLink to={item.link}>{item.label}</NavLink>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <NavLink
              to={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <Text size="md" fw={500} className={classes.linkLabel}>
                  {link.label}
                </Text>
                <Icons.AngleDownOutline />
              </Center>
            </NavLink>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink
        to={link.link}
        key={link.label}
        className={classes.link}
        variant="filled"
      >
        <Text fw={500}>{link.label}</Text>
      </NavLink>
    );
  });

  return (
    // <header className={classes.header}>
    <Container size="md">
      <div className={classes.inner}>
        <NavLink to="/" variant="filled">
          <Flex align="center">
            <img src={lamp} alt="logo" />
            <p>Банк идей</p>
          </Flex>
        </NavLink>

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      </div>
    </Container>
  );
  {
    /* </header> */
  }
}

export default Header;
