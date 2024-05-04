import { Button, Text, Flex } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";

function Like({ isLiked, onLike, getCount }) {
  console.log(isLiked);
  console.log(getCount);
  return (
    <div>
      <Button
        variant="light"
        c={isLiked ? "red" : "gray"}
        color="blue"
        radius="16"
        onClick={onLike}
      >
        <Flex align="center" gap={3}>
          <Icons.IconLike />
          <Text>{getCount}</Text>
        </Flex>
      </Button>
    </div>
  );
}

export default Like;
