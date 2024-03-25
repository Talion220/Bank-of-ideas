import { Container, Text, Title, Button, Flex } from "@mantine/core";
import "./searchTitle.module.css";
import { NavLink } from "react-router-dom";

function SearchTitle() {
  return (
    <Container size="xl" mt={100}>
      <Flex justify="space-between">
        <div>
          <Title>Изучайте идеи компании</Title>
          <Text mt={20} c="dimmed">
            1,000 идей
          </Text>
        </div>
        <Button
          mt={15}
          radius={16}
          size="md"
          component={NavLink}
          to="/idea-create"
        >
          Создать идею
        </Button>
      </Flex>
    </Container>
  );
}

export default SearchTitle;
