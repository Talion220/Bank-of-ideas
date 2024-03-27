import "./searchContent.module.css";
import { useState } from "react";
import {
  Container,
  TextInput,
  ActionIcon,
  SegmentedControl,
  Flex,
  CloseButton,
  Group,
  Popover,
  Button,
  Select,
} from "@mantine/core";
import { Icons } from "../../shared/images/Icons";

export default function SearchContent(props) {
  const [clear, setClear] = useState("");
  return (
    <Container size="xl" mt={20}>
      <TextInput
        radius="xl"
        size="xl"
        placeholder="Искать идеи..."
        rightSectionWidth={clear ? 230 : 188}
        leftSection={<Icons.IconSearch />}
        value={clear}
        rightSectionPointerEvents="all"
        onChange={(event) => setClear(event.currentTarget.value)}
        rightSection={
          <Flex>
            <ActionIcon
              size={42}
              color="gray"
              variant="transparent"
              onClick={() => setClear("")}
              style={{ display: clear ? undefined : "none" }}
            >
              <Icons.CloseButton />
            </ActionIcon>

            <Popover
              transitionProps={{ transition: "rotate-right", duration: 150 }}
              width={300}
              radius={16}
              position="bottom"
              withArrow
              arrowPosition="side"
              shadow="md"
            >
              <Popover.Target>
                <Button c="gray" variant="transparent" radius={12}>
                  Фильтры
                  <Icons.IconAdjustments />
                </Button>
              </Popover.Target>
              <Popover.Dropdown bg="var(--mantine-color-body)">
                <Select
                  label="По времени"
                  defaultValue="За все время" //дефалт велью должен меняться
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  data={[
                    "За все время",
                    "За год",
                    "За месяц",
                    "За неделю",
                    "За день",
                  ]}
                />
                <Select
                  label="По просмотрам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  data={[
                    "Все",
                    "Больше всего просмотров",
                    "Меньше всего просмотров",
                  ]}
                />
                <Select
                  label="По голосам"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  data={["Все", "Больше всего голосов", "Меньше всего голосов"]}
                />
                <Select
                  label="По стадии"
                  defaultValue="Все"
                  allowDeselect={false}
                  comboboxProps={{ withinPortal: false }}
                  data={[
                    "Все",
                    "Поданные идеи",
                    "Одобренные идеи",
                    "Внедренные идеи",
                  ]}
                />
              </Popover.Dropdown>
            </Popover>

            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
        {...props}
      />
    </Container>
  );
}
