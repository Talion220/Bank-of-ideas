import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Stack,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Flex,
  Avatar,
  Container,
  Anchor,
} from "@mantine/core";

import classes from "./header.module.css";

import { useDisclosure } from "@mantine/hooks";

import { Icons } from "../../../shared/images/Icons";
import scrollToTop from "../../../shared/utilities/ScrollToTop";
import avatar from "../../../shared/images/avatar.png";
import { NavLink } from "react-router-dom";

const dropLinks = {
  idea: [
    {
      title: "У Вас есть идея?",
      link: "/do-you-have-an-idea",
    },
    {
      title: "Наша база идей",
      link: "/idea",
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
    <Anchor
      component={NavLink}
      to={item.link}
      key={item.title}
      underline="never"
      className={classes.subLink}
      aria-label={item.title}
      onClick={() => {
        toggleLinksIdea();
        scrollToTop();
      }}
    >
      <UnstyledButton className={classes.subLinks}>
        <Group wrap="nowrap" pl={20} align="flex-start">
          {item.title}
        </Group>
      </UnstyledButton>
    </Anchor>
  ));

  const otherLinks = dropLinks.other.map((item) => (
    <Anchor
      component={NavLink}
      to={item.link}
      key={item.title}
      underline="never"
      className={classes.subLink}
      aria-label={item.title}
      onClick={() => {
        toggleLinksOther();
        scrollToTop();
      }}
    >
      <UnstyledButton w="100%" className={classes.subLinks}>
        <Group wrap="nowrap" pl={20} align="flex-start">
          {item.title}
        </Group>
      </UnstyledButton>
    </Anchor>
  ));

  return (
    <Container size="xl" px="md" className={classes.inner}>
      <Group>
        <Anchor
          component={NavLink}
          to="/"
          onClick={() => {
            scrollToTop();
          }}
          underline="never"
          aria-label="Логотип Банк идей"
        >
          <Flex align="center">
            <Icons.Logo />
            <Text c="black" size="xl" ml={15} fw={600}>
              Банк идей
            </Text>
          </Flex>
        </Anchor>
      </Group>

      <Group h="100%" gap={0} visibleFrom="sm">
        <Anchor
          component={NavLink}
          to="/"
          onClick={() => {
            scrollToTop();
          }}
          underline="never"
          className={classes.link}
          aria-label="Главная"
        >
          Главная
        </Anchor>

        <HoverCard
          width={250}
          position="bottom"
          radius="md"
          shadow="md"
          withinPortal
        >
          <HoverCard.Target>
            <Anchor
              component="a"
              href="#"
              underline="never"
              className={classes.link}
              aria-label="Идеи"
            >
              <Center>
                <Text mr={5} fw={500}>
                  Идеи
                </Text>
                <Icons.AngleDownOutline />
              </Center>
            </Anchor>
          </HoverCard.Target>

          <HoverCard.Dropdown style={{ overflow: "hidden" }}>
            <Text fw={500} pl={30}>
              Идеи
            </Text>

            <Divider my="sm" />

            <SimpleGrid rows={3} spacing={0}>
              {ideaLinks}
            </SimpleGrid>
          </HoverCard.Dropdown>
        </HoverCard>

        <Anchor
          component={NavLink}
          to="/news"
          onClick={() => {
            scrollToTop();
          }}
          underline="never"
          className={classes.link}
          aria-label=" Новости"
        >
          Новости
        </Anchor>

        <HoverCard
          width={250}
          position="bottom"
          radius="md"
          shadow="md"
          withinPortal
        >
          <HoverCard.Target>
            <Anchor
              component="a"
              href="#"
              underline="never"
              className={classes.link}
              aria-label="Другое"
            >
              <Center>
                <Text mr={5} fw={500}>
                  Другое
                </Text>
                <Icons.AngleDownOutline />
              </Center>
            </Anchor>
          </HoverCard.Target>

          <HoverCard.Dropdown style={{ overflow: "hidden" }}>
            <Text fw={500} size="md" pl={30}>
              Другое
            </Text>

            <Divider my="sm" />

            <SimpleGrid rows={2} spacing={0}>
              {otherLinks}
            </SimpleGrid>
          </HoverCard.Dropdown>
        </HoverCard>

        <Anchor
          component={NavLink}
          to="/profile"
          onClick={() => {
            scrollToTop();
          }}
          underline="never"
          className={classes.link}
          aria-label="Аватар"
        >
          <Avatar src={avatar} />
        </Anchor>
      </Group>

      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        closeButtonProps={{ "aria-label": "Закрыть меню" }}
        size="70%"
        title={
          <Text size="lg" fw={700} pt={20}>
            Навигация
          </Text>
        }
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        transitionProps={{
          transition: "fade-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(100)})`} mx="-md">
          <Divider my="sm" />

          <Stack gap={0} px={20}>
            <Anchor
              component={NavLink}
              to="/"
              className={classes.link}
              onClick={() => {
                toggleDrawer();
                scrollToTop();
              }}
              underline="never"
              aria-label="Главная"
              py={10}
            >
              Главная
            </Anchor>

            <UnstyledButton
              w="100%"
              className={classes.link}
              onClick={toggleLinksIdea}
              py={10}
            >
              <Center>
                <Text mr={5} fw={500}>
                  Идеи
                </Text>
                <Icons.AngleDownOutline />
              </Center>
            </UnstyledButton>

            <Collapse in={linksOpenedIdea} onClick={toggleDrawer}>
              {ideaLinks}
            </Collapse>

            <Anchor
              component={NavLink}
              to="/news"
              className={classes.link}
              onClick={() => {
                toggleDrawer();
                scrollToTop();
              }}
              underline="never"
              aria-label="Новости"
              py={10}
            >
              Новости
            </Anchor>

            <UnstyledButton
              w="100%"
              className={classes.link}
              onClick={toggleLinksOther}
              py={10}
            >
              <Center>
                <Text mr={5} fw={500}>
                  Другое
                </Text>
                <Icons.AngleDownOutline />
              </Center>
            </UnstyledButton>

            <Collapse in={linksOpenedOther} onClick={toggleDrawer}>
              {otherLinks}
            </Collapse>

            <Anchor
              component={NavLink}
              to="/profile"
              className={classes.link}
              onClick={() => {
                toggleDrawer();
                scrollToTop();
              }}
              underline="never"
              aria-label="Профиль"
              py={10}
            >
              Профиль
              {/* <Avatar src={avatar} />
            Кузнецова Анна Евгеньевна */}
            </Anchor>
          </Stack>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Container>
  );
}

export default Header;
