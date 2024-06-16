import { format, formatDistanceToNow, isThisYear } from "date-fns";
import { ru } from "date-fns/locale";

function formatDate(time) {
  const date = new Date(time);
  const now = new Date();
  let formattedDate;

  if (time === "") {
    return "";
  }

  if (now - date < 24 * 60 * 60 * 1000) {
    formattedDate = formatDistanceToNow(date, { addSuffix: true, locale: ru });
  } else if (now - date < 2 * 24 * 60 * 60 * 1000) {
    formattedDate = `вчера в ${format(date, "HH:mm", { locale: ru })}`;
  } else {
    const dateFormat = isThisYear(date) ? "d MMMM" : "d MMMM yyyy";
    formattedDate = format(date, `${dateFormat} 'в' HH:mm`, { locale: ru });
  }

  return formattedDate;
}

export default formatDate;
