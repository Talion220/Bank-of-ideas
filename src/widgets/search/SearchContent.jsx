import "./searchContent.module.css";
import { useState } from "react";
import {
  Container,
  TextInput,
  ActionIcon,
  SegmentedControl,
  Flex,
} from "@mantine/core";
import { Icons } from "../../shared/images/Icons";

export default function SearchContent(props) {
  const [time, setTime] = useState("allTime");
  const [views, setViews] = useState("allViews");
  const [votes, setVotes] = useState("allVotes");
  const [ideas, setIdeas] = useState("allIdeas");
  return (
    <Container size="xl" mt={20}>
      <TextInput
        radius="xl"
        size="xl"
        placeholder="Искать идеи"
        rightSectionWidth={58}
        leftSection={<Icons.IconSearch />}
        rightSection={
          <ActionIcon size={42} radius="xl" variant="filled">
            <Icons.IconArrowRight />
          </ActionIcon>
        }
        {...props}
      />
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <SegmentedControl
          size="md"
          radius="xl"
          value={time}
          onChange={setTime}
          color="blue"
          data={[
            { label: "За все время", value: "allTime" },
            { label: "За год", value: "year" },
            { label: "За месяц", value: "month" },
            { label: "За неделю", value: "week" },
            { label: "За день", value: "day" },
          ]}
        />
        <SegmentedControl
          size="md"
          radius="xl"
          value={views}
          onChange={setViews}
          color="blue"
          data={[
            { label: "Все", value: "allViews" },
            { label: "Больше всего просмотров", value: "mostViews" },
            { label: "Меньше всего просмотров", value: "leastViews" },
          ]}
        />
        <SegmentedControl
          size="md"
          radius="xl"
          value={votes}
          onChange={setVotes}
          color="blue"
          data={[
            { label: "Все", value: "allVotes" },
            { label: "Больше всего голосов", value: "mostVotes" },
            { label: "Меньше всего голосов", value: "leastVotes" },
          ]}
        />
        <SegmentedControl
          size="md"
          radius="xl"
          value={ideas}
          onChange={setIdeas}
          color="blue"
          data={[
            { label: "Все", value: "allIdeas" },
            { label: "Поданные идеи", value: "submittedIdeas" },
            { label: "Одобренные идеи", value: "approvedIdeas" },
            { label: "Внедренные идеи", value: "embeddedIdeas" },
          ]}
        />
      </Flex>
    </Container>
  );
}
