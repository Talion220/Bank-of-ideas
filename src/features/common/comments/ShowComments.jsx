import Comments from "../../../widgets/common/comments/Comments";
import { Text } from "@mantine/core";
import useNewsStore from "../../../data/stores/useNewsStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import useIdeasStore from "../../../data/stores/useIdeasStore";

export default function ShowComments({ from }) {
  const { comments } =
    from === "news"
      ? useNewsStore(
          useShallow((state) => ({
            comments: state.comments,
          }))
        )
      : useIdeasStore(
          useShallow((state) => ({
            comments: state.comments,
          }))
        );

  console.log("comments");

  if (comments.length === 0) {
    return (
      <Text m="120px 0 140px" ta="center" size="md">
        Список комментариев пуст
      </Text>
    );
  } else {
    return comments
      .reverse()
      .map((index) => (
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
