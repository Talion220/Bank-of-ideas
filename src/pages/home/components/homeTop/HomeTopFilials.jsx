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

const topFilials = [
  {
    title: "Филиал 1",
  },
  {
    title: "Филиал 2",
  },
  {
    title: "Филиал 3",
  },
  {
    title: "Филиал 4",
  },
  {
    title: "Филиал 5",
  },
];

function HomeTopFilials() {
  const rows = topFilials.map((item) => (
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

export default HomeTopFilials;
