import { Text, Container, ActionIcon, Group, rem, Anchor } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import classes from "./footer.module.css";

export default function FooterLinks() {
  return (
    <footer className={classes.footer}>
      <Container size="xl" px="md" className={classes.inner}>
        <Text size="sm" className={classes.text}>
          © Банк идей 2024. Все права защищены.
        </Text>
        <Anchor
          className={classes.link}
          href="https://google.com"
          target="_blank"
          size="sm"
        >
          Техническая поддержка.
        </Anchor>
      </Container>
    </footer>
  );
}
