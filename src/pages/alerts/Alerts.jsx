import {
  Group,
  Avatar,
  Text,
  Accordion,
  Container,
  Title,
} from "@mantine/core";
import avatar from "../../shared/images/avatar.png";
import classes from "./alerts.module.css";

const alerts = [
  {
    id: "bender",
    avatar: avatar,
    label: "Bender Bending Rodríguez",
    role: "Модератор",
    content:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: "carol",
    avatar: avatar,
    label: "Carol Miller",
    role: "Координатор",
    content:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: "homer",
    avatar: avatar,
    label: "Homer Simpson",
    role: "Модератор",
    content:
      "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
  },
];

function AccordionLabel({ label, avatar, role }) {
  return (
    <Group wrap="nowrap">
      <Avatar src={avatar} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="gray" fw={400}>
          {role}
        </Text>
      </div>
    </Group>
  );
}

function Alerts() {
  const items = alerts.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container size="xl" mt={40}>
      <Title mb={30}>Уведомления</Title>
      <Accordion
        radius={16}
        chevronPosition="right"
        variant="contained"
        classNames={{ control: classes.alerts }}
      >
        {items}
      </Accordion>
    </Container>
  );
}

export default Alerts;
