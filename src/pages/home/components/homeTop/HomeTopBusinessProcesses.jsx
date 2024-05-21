import styles from "./homeTopAll.module.css";

import {
  Center,
  Table,
  Text,
  Flex,
  Title,
  Divider,
  Group,
  Anchor,
} from "@mantine/core";

const topBusinessProcesses = [
  {
    title: "Бизнес процесс 1",
  },
  {
    title: "Бизнес процесс 2",
  },
  {
    title: "Бизнес процесс 3",
  },
  {
    title: "Бизнес процесс 4",
  },
  {
    title: "Бизнес процесс 5",
  },
];

function HomeTopBusinessProcesses() {
  const rows = topBusinessProcesses.map((item) => (
    <Anchor
      key={item.title}
      underline="hover"
      className={styles.subLink}
      aria-label={item.title}
    >
      <Divider my="sm" />
      <Group gap="sm">
        <Text p="7px 0 8px" className={styles.text}>
          {item.title}
        </Text>
      </Group>
    </Anchor>
  ));

  return (
    <Center mt={50}>
      <Flex align="start" direction="column">
        {rows}
      </Flex>
    </Center>
  );
}

export default HomeTopBusinessProcesses;
