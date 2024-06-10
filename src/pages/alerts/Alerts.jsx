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
    id: "1",
    avatar: avatar,
    label: "Описание проблемы",
    role: "Модератор",
    content:
      "Спасибо за вашу инициативу и активный вклад в развитие нашей компании. Ваша идея  была рассмотрена нашей экспертной комиссией. Мы видим потенциал в вашей идее, однако для её дальнейшего рассмотрения и внедрения нам необходимо внести некоторые доработки. Пожалуйста, предоставьте более детальное описание проблемы, которую ваша идея решает. Укажите конкретные аспекты текущей ситуации и почему она требует улучшения. Мы уверены, что после внесения этих доработок ваша идея станет ещё более ценной и реализуемой. Пожалуйста, внесите необходимые изменения и отправьте обновлённую версию для повторного рассмотрения. Спасибо за ваше сотрудничество и стремление к улучшению нашей работы! С уважением, Мария Смирнова, администратор платформы идей",
  },

  {
    id: "2",
    avatar: avatar,
    label: "Ресурсы и сроки",
    role: "Координатор",
    content:
      "Уточните, какие ресурсы (финансовые, человеческие, технологические) потребуются для реализации вашей идеи. Определите предполагаемые сроки выполнения каждого этапа реализации.",
  },

  {
    id: "3",
    avatar: avatar,
    label: "Решение и его преимущества",
    role: "Модератор",
    content:
      "Расширьте описание предлагаемого решения. Объясните, какие конкретные шаги будут предприняты и как они повлияют на текущие процессы. Укажите, какие преимущества ваша идея принесёт компании.",
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
