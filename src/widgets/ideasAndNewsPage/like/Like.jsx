import { Button, Text, Flex } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import useNewsStore from "../../../data/stores/useNewsStore";
import { Loader } from "@mantine/core";
import useIdeasStore from "../../../data/stores/useIdeasStore";

function Like({ id, from }) {
  const { likes, clickLike } =
    from === "news"
      ? useNewsStore((state) => ({
          likes: state.likes,
          clickLike: state.clickLike,
        }))
      : useIdeasStore((state) => ({
          likes: state.likes,
          clickLike: state.clickLike,
        }));

  const isLiked = likes[id]?.isLiked || false;
  const likeCount = likes[id]?.count || 0;

  if (typeof isLiked !== "boolean" || typeof likeCount !== "number") {
    return <Loader />;
  } else {
    return (
      <div>
        <Button
          variant="light"
          c={isLiked ? "red" : "gray"}
          color="blue"
          radius="16"
          onClick={() => clickLike(id)}
        >
          <Flex align="center" gap={3}>
            <Icons.IconLike />
            <Text>{likeCount}</Text>
          </Flex>
        </Button>
      </div>
    );
  }
}

export default Like;
