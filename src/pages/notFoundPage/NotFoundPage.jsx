import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import image from "./image.svg";
import classes from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Что-то пошло не так...</Title>
          <Text c="dimmed" size="lg">
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы
            неправильно ввели адрес или страница была перемещена на другой URL.
            Если вы считаете, что это ошибка, обратитесь в службу поддержки.
          </Text>
          <Button
            size="md"
            mt="xl"
            radius={16}
            className={classes.control}
            component={NavLink}
            to="/"
          >
            На главную
          </Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}
