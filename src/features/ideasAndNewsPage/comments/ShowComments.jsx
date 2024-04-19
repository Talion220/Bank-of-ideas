import Comments from "../../../widgets/ideasAndNewsPage/comments/Comments";
import { Text } from "@mantine/core";

export default function ShowComments({ comments }) {
  let commFill;

  if (comments.length === 0) {
    commFill = (
      <Text m="120px 0 140px" ta="center" size="md">
        Список комментариев пуст
      </Text>
    );
  } else {
    commFill = comments.map((index) => (
      <Comments
        key={index.id}
        avatar={index.avatar}
        author={index.author}
        text={index.text}
        time={index.time}
      />
    ));
  }

  return commFill;
}
