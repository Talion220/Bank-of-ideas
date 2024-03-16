import { Menu, Group, Center, Burger, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon } from "@iconify/react";

import classes from "./HeaderMenu.module.css";

// import "./header.scss";
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
    link: "/other",
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
            <Center>
              <a className={classes.linkLabel}>{link.label}</a>
              <Icon icon="flowbite:angle-down-outline" width={20} height={20} />
            </Center>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink to={link.link} key={link.label} className={classes.link}>
        {link.label}
      </NavLink>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <NavLink to="/">
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
    </header>
  );

  //   return (
  //     <header>
  //       <NavLink to="/">
  //   <div className="logo">
  //     <img src={lamp} alt="logo" />
  //     <h3>Банк идей</h3>
  //   </div>
  //       </NavLink>
  //       <nav>
  //         <NavLink to="/">Главная</NavLink>
  //         <NavLink to="/do-you-have-an-idea">У вас есть идея?</NavLink>
  //         <NavLink to="/search">Наша база идей</NavLink>
  //         <NavLink to="/documentation">Документация</NavLink>
  //         <NavLink to="/analytics">Аналитика</NavLink>
  //         <NavLink to="/news">Новости</NavLink>
  //         <NavLink to="/idea-create">Создать идею</NavLink>
  //         <NavLink to="/profile">
  //           <img src={avatar} alt="avatar" />
  //         </NavLink>
  //       </nav>
  //     </header>
  //   );
}

export default Header;
