import Comments from "../../../widgets/ideasAndNewsPage/comments/Comments";
import { Text } from "@mantine/core";
import useNewsStore from "../../../data/stores/useNewsStore";
import { useEffect } from "react";

export default function ShowComments() {
  const { comments } = useNewsStore((state) => ({
    comments: state.comments,
  }));

  console.log("comments");

  if (comments.length === 0) {
    return (
      <Text m="120px 0 140px" ta="center" size="md">
        Список комментариев пуст
      </Text>
    );
  } else {
    return comments.map((index) => (
      <Comments
        key={index.id}
        avatar={index.avatar}
        author={index.author}
        text={index.text}
        time={index.date}
      />
    ));
  }
}
