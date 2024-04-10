import { useParams } from "react-router-dom";
import { Icons } from "../../shared/images/Icons";
import avatar from "../../shared/images/avatar.png";

const data = [
  {
    id: "1",
    author: "Isaac Asimov",
    title: "Foundation",
    status: "Внедрено",
    votes: "12",
    comments: "2",
    views: "34",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "2",
    author: "Mary Shelley",
    title: "Frankenstein",
    status: "Внедрено",
    votes: "25",
    comments: "4",
    views: "86",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "3",
    author: "Stanislaw Lem",
    title: "Solaris",
    status: "Внедрено",
    votes: "65",
    comments: "14",
    views: "125",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "4",
    author: "Frank Herbert",
    title: "Dune",
    status: "Внедрено",
    votes: "4",
    comments: "0",
    views: "6",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "5",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "6",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "7",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "8",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "9",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
  {
    id: "10",
    author: "Ursula K. Le Guin",
    title: "The Left Hand of Darkness",
    status: "Внедрено",
    votes: "16",
    comments: "1",
    views: "47",
    avatar: avatar,
    linkAuthor: "/profile",
  },
];

function IdeaPage() {
  const { id } = useParams();
  const idea = data.find((idea) => idea.id === id);
  return (
    <div>
      Идея
      <h1>{idea.title}</h1>
      <p>{idea.author}</p>
    </div>
  );
}

export default IdeaPage;
