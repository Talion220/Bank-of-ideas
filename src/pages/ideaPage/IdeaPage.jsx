import { Icons } from "../../shared/images/Icons";
import { useParams, NavLink } from "react-router-dom";
import ShowComments from "../../features/ideasAndNewsPage/comments/ShowComments";
import CommentsForm from "../../widgets/ideasAndNewsPage/commentsForm/CommentsForm";
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
  Card,
  Center,
  Badge,
  Skeleton,
} from "@mantine/core";

import classes from "./IdeaPage.module.css";
import Like from "../../widgets/ideasAndNewsPage/like/Like";
import scrollToTop from "../../shared/utilities/ScrollToTop";
import useIdeasStore from "../../data/stores/useIdeasStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

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

  // const cards = ideaData.slice(0, 3).map((article) => (
  //   <Card
  //     key={article.id}
  //     withBorder
  //     radius="16"
  //     p={0}
  //     mb={20}
  //     className={classes.card}
  //   >
  //     <Anchor
  //       component={NavLink}
  //       to={`/idea/${article.id}`}
  //       onClick={() => {
  //         scrollToTop();
  //       }}
  //       c="dark"
  //       underline="none"
  //     >
  //       <Group wrap="nowrap" gap={0}>
  //         <Flex direction="column" className={classes.body}>
  //           <Badge
  //             size="sm"
  //             variant="gradient"
  //             gradient={{ from: "blue", to: "indigo", deg: 135 }}
  //           >
  //             {article.category}
  //           </Badge>
  //           <Text className={classes.title} mt="xs">
  //             {article.title}
  //           </Text>
  //           <Flex gap="sm" mt="xs">
  //             <Text size="sm">Статус:</Text>
  //             <Badge size="md" variant="light" color="blue">
  //               {article.status}
  //             </Badge>
  //           </Flex>
  //           <Group pt={15} wrap="nowrap" gap="xs">
  //             {/* <Anchor
  //               component={NavLink}
  //               to="/profile"
  //               onClick={() => {
  //           scrollToTop();
  //         }}
  //               c="dark"
  //             > */}
  //             <Group gap="xs" wrap="nowrap">
  //               <Avatar size={20} src={article.avatar} />
  //               <Text size="sm">{article.author}</Text>
  //             </Group>
  //             {/* </Anchor> */}
  //             <Text size="sm" c="dimmed">
  //               •
  //             </Text>
  //             <Text size="sm" c="dimmed">
  //               {article.businessProcess}
  //             </Text>
  //             <Text size="sm" c="dimmed">
  //               •
  //             </Text>
  //             <Text size="sm" c="dimmed">
  //               {article.date}
  //             </Text>
  //           </Group>
  //           <Group pt={15} gap="lg">
  //             <Center>
  //               <Icons.IconLike />
  //               <Text size="sm" className={classes.bodyText}>
  //                 {article.likes}
  //               </Text>
  //             </Center>
  //             <Center>
  //               <Icons.IconMessageCircle />
  //               <Text size="sm" className={classes.bodyText}>
  //                 {article.comments}
  //               </Text>
  //             </Center>
  //             <Center>
  //               <Icons.IconEye />
  //               <Text size="sm" className={classes.bodyText}>
  //                 {article.views}
  //               </Text>
  //             </Center>
  //           </Group>
  //         </Flex>
  //       </Group>
  //     </Anchor>
  //   </Card>
  // ));
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
                {idea.date}
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

        <Divider my="sm" />

        <Text fw={600} fz="lg" my={20}>
          Комментарии • {commentsLength}
        </Text>

        <CommentsForm id={id} from={"idea"} />

        <ShowComments from={"idea"} />

        <Divider my="sm" />

        <Text fw={600} fz="lg" my={20}>
          Идеи по такому же бизнес процессу
        </Text>

        {/* {cards} */}
      </Container>
    );
  }
}

export default IdeaPage;
