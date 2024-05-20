import { format, formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

function formatDate(time) {
  const date = new Date(time);
  const now = new Date();
  let formattedDate;

  if (now - date < 24 * 60 * 60 * 1000) {
    formattedDate = formatDistanceToNow(date, { addSuffix: true, locale: ru });
  } else {
    if (now - date < 2 * 24 * 60 * 60 * 1000) {
      formattedDate = `вчера в ${format(date, "HH:mm", { locale: ru })}`;
    } else {
      formattedDate = format(date, "dd.MM.yyyy HH:mm", { locale: ru });
    }
  }
  return formattedDate;
}

export default formatDate;
