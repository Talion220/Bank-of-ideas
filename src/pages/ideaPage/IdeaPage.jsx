import { Icons } from "../../shared/images/Icons";
import { useParams, NavLink } from "react-router-dom";
import ShowComments from "../../features/common/comments/ShowComments";
import CommentsForm from "../../widgets/common/commentsForm/CommentsForm";
import {
  Title,
  Text,
  Container,
  Avatar,
  Flex,
  Anchor,
  Button,
  Divider,
  Group,
  Badge,
  Skeleton,
} from "@mantine/core";
import Like from "../../widgets/common/like/Like";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import useIdeasStore from "../../data/stores/useIdeasStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import ShowSameIdeas from "../../features/ideas/showSameIdeas/ShowSameIdeas";
import scrollToAnchor from "../../shared/utilities/ScrollToAnchor";
import formatDate from "../../features/date/date";

function IdeaPage() {
  const { id } = useParams();

  const { IdeaPageLoading, getIdeaPage, idea, commentsLength } = useIdeasStore(
    useShallow((state) => ({
      IdeaPageLoading: state.IdeaPageLoading,
      getIdeaPage: state.getIdeaPage,
      idea: state.idea,
      commentsLength: state.commentsLength,
      // idIdea: state.idIdea,
      // getId: state.getId,
    }))
  );

  useEffect(() => {
    // getId(id);
    // console.log(idIdea);
    getIdeaPage(id);
  }, [id]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromLink = urlParams.get("fromLink");
    if (fromLink === "true") {
      scrollToAnchor("comments");
    }
  }, [id, IdeaPageLoading]);

  let date;

  if (IdeaPageLoading || idea === undefined || Object.keys(idea).length === 0) {
    return (
      <Container size="xl" mt={40}>
        <Skeleton height={44} radius={16} />
        <Skeleton height={24} maw={600} mt={5} radius={16} />
        <Skeleton height={340} my={30} radius={16} />
        <Skeleton height={600} radius={16} />
        <Skeleton height={34} mt={30} mb={20} maw={80} radius={16} />
        <Skeleton height={28} my={20} radius={16} />
        <Flex gap="xs" mb={20}>
          <Skeleton height={38} circle />
          <Skeleton height={66} radius={16} />
        </Flex>
        <Flex direction="column" gap="xs" mb={20}>
          <Group>
            <Skeleton height={38} circle />
            <div>
              <Skeleton height={20} mb={5} maw={150} radius={16} />
              <Skeleton height={15} maw={91} radius={16} />
            </div>
          </Group>
          <Skeleton height={50} radius={16} />
        </Flex>
        <Flex direction="column" gap="xs" mb={20}>
          <Group>
            <Skeleton height={38} circle />
            <div>
              <Skeleton height={20} mb={5} maw={150} radius={16} />
              <Skeleton height={15} maw={91} radius={16} />
            </div>
          </Group>
          <Skeleton height={50} radius={16} />
        </Flex>

        <Skeleton height={28} my={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
        <Skeleton height={225} mb={20} radius={16} />
      </Container>
    );
  } else {
    date = formatDate(idea.date);
    return (
      <Container size="xl" mt={40}>
        <Flex justify="space-between" align="center" wrap="wrap">
          <Flex direction="column">
            <Badge
              size="md"
              variant="gradient"
              gradient={{ from: "blue", to: "indigo", deg: 135 }}
            >
              {idea.category}
            </Badge>

            <Title lineClamp={4}>{idea.title}</Title>
            <Flex gap="sm" mt={5}>
              <Text>Статус:</Text>
              <Badge variant="light" color="blue" size="lg">
                {idea.status}
              </Badge>
            </Flex>

            <Flex gap="sm" wrap="wrap" align="center" mt={7}>
              <Anchor
                component={NavLink}
                to="/profile"
                onClick={() => {
                  scrollToTop();
                }}
                c="dark"
              >
                <Flex align="center">
                  <Avatar size={20} src={idea.avatar} />
                  <Text pl={10}>{idea.author}</Text>
                </Flex>
              </Anchor>
              <Text size="sm" c="dimmed">
                •
              </Text>
              <Text size="sm" c="dimmed">
                {idea.businessProcess}
              </Text>
              <Text size="sm" c="dimmed">
                •
              </Text>
              <Text size="sm" c="dimmed">
                {date}
              </Text>
              <Text size="sm" c="dimmed">
                •
              </Text>
              <Flex align="center" gap={5} size="sm" c="dimmed">
                <Icons.IconEye />
                <Text size="sm">{idea.views}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Button
            my={10}
            component={NavLink}
            to="life-cycle"
            onClick={() => {
              scrollToTop();
            }}
            radius={16}
          >
            Посмотреть жизненный путь
          </Button>
        </Flex>

        <Text fw={600} fz="lg" my={20}>
          Проблема
        </Text>

        <Text>{idea.problem}</Text>

        <Text fw={600} fz="lg" my={20}>
          Решение
        </Text>

        <Text>{idea.solution}</Text>

        <Text fw={600} fz="lg" my={20}>
          Результат
        </Text>

        <Text>{idea.result}</Text>

        {idea.note && (
          <div>
            <Text fw={600} fz="lg" my={20}>
              Примечание
            </Text>
            <Text>{idea.note}</Text>
          </div>
        )}

        {idea.coauthors && (
          <div>
            <Text fw={600} fz="lg" my={20}>
              Соавторы
            </Text>

            <Anchor
              component={NavLink}
              to="/profile"
              onClick={() => {
                scrollToTop();
              }}
              c="dark"
            >
              <Flex gap="xs" align="center">
                <Avatar src={idea.avatar} alt="avatar" radius="xl" />
                <Text>{idea.coauthors}</Text>
              </Flex>
            </Anchor>
          </div>
        )}
        <Flex gap="md" align="center" my="30px 20px">
          <Like id={id} from={"idea"} />
        </Flex>

        <Divider id="comments" my="sm" />

        <Text fw={600} fz="lg" my={20}>
          Комментарии • {commentsLength}
        </Text>

        <CommentsForm id={id} from={"idea"} />

        <ShowComments from={"idea"} />

        <Divider my="sm" />

        <Text fw={600} fz="lg" my={20}>
          Идеи по такому же бизнес процессу
        </Text>

        <ShowSameIdeas id={id} />
      </Container>
    );
  }
}

export default IdeaPage;
