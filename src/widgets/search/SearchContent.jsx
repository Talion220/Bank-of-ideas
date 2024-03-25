import "./searchContent.module.css";
import { Container, TextInput, ActionIcon, rem } from "@mantine/core";
import { Icons } from "../../shared/images/Icons";

export default function SearchContent(props) {
  return (
    <Container size="xl" mt={20}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Искать идеи"
        rightSectionWidth={42}
        leftSection={<Icons.IconSearch />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled">
            <Icons.IconArrowRight />
          </ActionIcon>
        }
        {...props}
      />
    </Container>
  );
}
