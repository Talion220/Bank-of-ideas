import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Flex,
  Avatar,
} from "@mantine/core";

import classes from "./header.module.css";

import { useDisclosure } from "@mantine/hooks";

import { Icons } from "../../../shared/images/Icons";
import lamp from "../../../shared/images/lamp.svg";
import avatar from "../../../shared/images/avatar.png";
import { NavLink } from "react-router-dom";

const dropLinks = {
  idea: [
    {
      title: "У вас есть идея?",
      link: "/do-you-have-an-idea",
    },
    {
      title: "Наша база идей",
      link: "/search",
    },
    {
      title: "Создать идею",
      link: "/idea-create",
    },
  ],
  other: [
    {
      title: "Аналитика",
      link: "/analytics",
    },
    {
      title: "Документация",
      link: "/documentation",
    },
  ],
};

function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpenedIdea, { toggle: toggleLinksIdea }] = useDisclosure(false);
  const [linksOpenedOther, { toggle: toggleLinksOther }] = useDisclosure(false);

  const ideaLinks = dropLinks.idea.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" pl={20} align="flex-start">
        <NavLink to={item.link} onClick={toggleDrawer}>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));

  const otherLinks = dropLinks.other.map((item) => (
    <UnstyledButton w="100%" className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" pl={20} align="flex-start">
        <NavLink to={item.link} onClick={toggleDrawer}>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <NavLink to="/" variant="filled">
            <Flex align="center">
              <img src={lamp} alt="logo" />
              <Text c="black" size="xl" ml={15} fw={600}>
                Банк идей
              </Text>
            </Flex>
          </NavLink>

          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink to="/" className={classes.link}>
              <Text size="md" fw={500}>
                Главная
              </Text>
            </NavLink>
            <HoverCard
              width={250}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      <Center>
                        <Text mr={5} fw={500} size="md">
                          Идеи
                        </Text>
                        <Icons.AngleDownOutline />
                      </Center>
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Идеи</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid rows={3} spacing={0}>
                  {ideaLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <NavLink to="/news" className={classes.link}>
              <Text size="md" fw={500}>
                Новости
              </Text>
            </NavLink>
            <HoverCard
              width={250}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      <Center>
                        <Text mr={5} size="md" fw={500}>
                          Другое
                        </Text>
                        <Icons.AngleDownOutline />
                      </Center>
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Другое</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid rows={2} spacing={0}>
                  {otherLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <NavLink to="/profile" className={classes.link}>
              <Avatar src={avatar} />
            </NavLink>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        title={
          <Text size="lg" fw={700}>
            Навигация
          </Text>
        }
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <NavLink to="/" className={classes.link} onClick={toggleDrawer}>
            <Text fw={500} p={10}>
              Главная
            </Text>
          </NavLink>
          <UnstyledButton
            w="100%"
            className={classes.link}
            onClick={toggleLinksIdea}
          >
            <Center inline>
              <Box component="span" mr={5}>
                <Center>
                  <Text mr={5} fw={500} size="md" p={10}>
                    Идеи
                  </Text>
                  <Icons.AngleDownOutline />
                </Center>
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpenedIdea}>{ideaLinks}</Collapse>
          <NavLink to="/news" className={classes.link} onClick={toggleDrawer}>
            <Text fw={500} p={10}>
              Новости
            </Text>
          </NavLink>
          <UnstyledButton
            w="100%"
            className={classes.link}
            onClick={toggleLinksOther}
          >
            <Center inline>
              <Box component="span" mr={5}>
                <Center>
                  <Text mr={5} fw={500} size="md" p={10}>
                    Другое
                  </Text>
                  <Icons.AngleDownOutline />
                </Center>
              </Box>
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpenedOther}>{otherLinks}</Collapse>
          <NavLink
            to="/profile"
            className={classes.link}
            onClick={toggleDrawer}
          >
            <Text fw={500} p={10}>
              Профиль
            </Text>
            {/* <Avatar src={avatar} />
            Кузнецова Анна Евгеньевна */}
          </NavLink>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Header;
