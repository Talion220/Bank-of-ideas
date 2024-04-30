import classes from "./news.module.css";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import { useState } from "react";
import {
  Container,
  Title,
  TextInput,
  ActionIcon,
  Flex,
  Anchor,
  Avatar,
  Text,
  SimpleGrid,
  Card,
  Image,
  AspectRatio,
  Group,
  Center,
  Divider,
  Button,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import newsImg from "../../shared/images/newsImg.jpg";
import avatar from "../../shared/images/avatar.png";

const data = [
  {
    id: 1,
    author: "Павлова Мария Алиевна",
    avatar: avatar,
    title: "Foundation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 'id' est laborum.\\nАбзац 1.10.32 de 'Finibus Bonorum et Malorum', написанный Цицероном в 45 году н.э.\\n'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\\nАнглийский перевод 1914 года, H. Rackham\\n'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'\\nАбзац 1.10.33 'de Finibus Bonorum et Malorum', написанный Цицероном в 45 году н.э. 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 'id' est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 'id' quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'\\nАнглийский перевод 1914 года, H. Rackham\\n'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    likes: 12,
    views: 34,
    newsImg:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    isLiked: true,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 2,
    author: "Токарева Варвара Вячеславовна",
    avatar: avatar,
    title: "Frankenstein",
    text: "Lorem ipsum",
    likes: 25,
    views: 86,
    newsImg:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [],
  },
  {
    id: 3,
    author: "Куликова Вера Даниэльевна",
    avatar: avatar,
    title: "Solaris",
    text: "Lorem ipsum",
    likes: 65,
    views: 12,
    newsImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 4,
    author: "Быков Григорий Богданович",
    avatar: avatar,
    title: "Dune",
    text: "Lorem ipsum",
    likes: 4,
    views: 6,
    newsImg:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 5,
    author: "Климова Алина Марсельевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 6,
    author: "Соколова Александра Ивановна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 7,
    author: "Громов Павел Германович",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 8,
    author: "Моисеева Маргарита Кирилловна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 9,
    author: "Гаврилова Екатерина Марковна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
  {
    id: 10,
    author: "Кононова Таисия Алиевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    text: "Lorem ipsum",
    likes: 16,
    views: 47,
    newsImg: "/src/shared/images/newsImg.jpg",
    linkAuthor: "/profile",
    isLiked: false,
    date: "11 апреля 2024",
    comments: [
      {
        id: 1,
        author: "John Doe",
        text: "Comment 1",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
      {
        id: 3,
        author: "Jane Smith",
        text: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        avatar: avatar,
        date: "18 апреля 2024",
      },
    ],
  },
];

function News(props) {
  const [clear, setClear] = useState("");

  const cards = data.map((article) => (
    <Card key={article.id} m={0} p="md" radius={16} className={classes.card}>
      <AspectRatio
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        ratio={1920 / 1080}
      >
        <Image radius={16} src={article.newsImg} />
      </AspectRatio>

      <Anchor
        mt={10}
        component={NavLink}
        to={`/news/${article.id}`}
        onClick={() => {
          scrollToTop();
        }}
        className={classes.link}
      >
        <Text fw="bold" lineClamp={1}>
          {article.title}
        </Text>
      </Anchor>

      <Flex gap="sm" wrap="wrap" align="center" mt={5}>
        <Anchor
          component={NavLink}
          to="/profile"
          onClick={() => {
            scrollToTop();
          }}
          c="dark"
          className={classes.link}
        >
          <Flex align="center">
            <Avatar size={20} src={article.avatar} />
            <Text pl={10}>{article.author}</Text>
          </Flex>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          {article.date}
        </Text>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Flex align="center" gap={5} size="sm" c="dimmed">
          <Icons.IconEye />
          <Text size="sm">{article.views}</Text>
        </Flex>
      </Flex>

      <Group mt={10} gap="lg">
        <Center>
          <Button
            variant="light"
            // c={liked ? "red" : "gray"}
            radius="16"
            color="blue"
            onClick={() => {
              // setLiked.toggle();
            }}
          >
            <Flex align="center" gap={3}>
              <Icons.IconLike />
              <Text>{article.likes}</Text>
            </Flex>
          </Button>
        </Center>
        <Center>
          <Button
            variant="light"
            c="gray"
            radius="16"
            color="blue"
            component={NavLink}
            to={`/news/${article.id}?fromLink=true`}
            onClick={() => {
              scrollToTop();
            }}
          >
            <Flex align="center" gap={3}>
              <Icons.IconMessageCircle />
              <Text>{article.comments.length}</Text>
            </Flex>
          </Button>
        </Center>
      </Group>

      <Divider mt="sm" />

      <Group wrap="nowrap" gap="xs" mt="xs">
        <Anchor
          component={NavLink}
          to={`/profile`}
          onClick={() => {
            scrollToTop();
          }}
          className={classes.link}
        >
          <Group gap="sm" wrap="nowrap">
            <Avatar size={20} src={avatar} />
            <Text size="sm" fw="500">
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          24 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>

      <Group wrap="nowrap" gap="xs" mt="xs">
        <Anchor
          component={NavLink}
          to={`/profile`}
          onClick={() => {
            scrollToTop();
          }}
          className={classes.link}
        >
          <Group gap="sm" wrap="nowrap">
            <Avatar size={20} src={avatar} />
            <Text size="sm" fw="500">
              Иванова Анна Сергеевна
            </Text>
          </Group>
        </Anchor>
        <Text size="sm" c="dimmed">
          •
        </Text>
        <Text size="sm" c="dimmed">
          18 апреля 2024
        </Text>
      </Group>
      <Text size="sm" lineClamp={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        tellus egestas, facilisis elit ac, hendrerit libero. Sed eget finibus
        mauris. Fusce imperdiet felis sapien, sit amet ornare nunc maximus vel.
        Duis volutpat libero nec mi egestas elementum. Suspendisse arcu metus,
        porttitor quis interdum nec, maximus nec ante. Integer condimentum
        ultrices consequat. In ut tincidunt erat. Nullam sollicitudin metus
        dolor, a condimentum velit fringilla id. Ut finibus, nunc sed vestibulum
        venenatis, velit nunc aliquet velit, a tempus enim leo a nisl. Duis
        ultricies ante vitae orci auctor ultrices.
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" mt={40}>
      <Title pb={30}>Новости компании</Title>
      <TextInput
        radius="xl"
        size="xl"
        placeholder="Искать новости..."
        rightSectionWidth={clear ? 102 : 60}
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
            <ActionIcon size={42} radius="xl" variant="filled">
              <Icons.IconArrowRight />
            </ActionIcon>
          </Flex>
        }
        {...props}
      />

      <SimpleGrid mt={30} cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default News;
