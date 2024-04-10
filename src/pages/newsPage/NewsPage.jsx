import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";
import newsImg from "../../shared/images/newsImg.jpg";
import { useParams } from "react-router-dom";

const data = [
  {
    id: "1",
    author: "Павлова Мария Алиевна",
    avatar: avatar,
    title: "Foundation",
    likes: "12",
    comments: "2",
    views: "34",
    newsImg:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
  },
  {
    id: "2",
    author: "Токарева Варвара Вячеславовна",
    avatar: avatar,
    title: "Frankenstein",
    likes: "25",
    comments: "4",
    views: "86",
    newsImg:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
  },
  {
    id: "3",
    author: "Куликова Вера Даниэльевна",
    avatar: avatar,
    title: "Solaris",
    likes: "65",
    comments: "14",
    views: "125",
    newsImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
  },
  {
    id: "4",
    author: "Быков Григорий Богданович",
    avatar: avatar,
    title: "Dune",
    likes: "4",
    comments: "0",
    views: "6",
    newsImg:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    linkAuthor: "/profile",
  },
  {
    id: "5",
    author: "Климова Алина Марсельевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
  {
    id: "6",
    author: "Соколова Александра Ивановна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
  {
    id: "7",
    author: "Громов Павел Германович",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
  {
    id: "8",
    author: "Моисеева Маргарита Кирилловна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
  {
    id: "9",
    author: "Гаврилова Екатерина Марковна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
  {
    id: "10",
    author: "Кононова Таисия Алиевна",
    avatar: avatar,
    title: "The Left Hand of Darkness",
    likes: "16",
    comments: "1",
    views: "47",
    newsImg: newsImg,
    linkAuthor: "/profile",
  },
];

function NewsPage() {
  const { id } = useParams();
  const news = data.find((idea) => idea.id === id);
  return (
    <div>
      Новость
      <h1>{news.title}</h1>
      <p>{news.author}</p>
    </div>
  );
}

export default NewsPage;
