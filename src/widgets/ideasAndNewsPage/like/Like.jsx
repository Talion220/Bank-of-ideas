import { Button, Text, Flex } from "@mantine/core";
import { Icons } from "../../../shared/images/Icons";

function Like({ liked, onLike, getCount }) {
  return (
    <div>
      <Button
        variant="light"
        c={liked ? "red" : "gray"}
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
