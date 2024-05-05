import { Button, Text, Flex } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";
import useNewsStore from "../../../data/stores/useNewsStore";

function Like({ id }) {
  const { likeCount, isLiked, clickLike } = useNewsStore((state) => ({
    likeCount: state.likeCount,
    isLiked: state.isLiked,
    clickLike: state.clickLike,
  }));
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

export default Like;
