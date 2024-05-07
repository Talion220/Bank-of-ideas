import { news } from "./src/data/mock/mockData/news/news";
import { ideas } from "./src/data/mock/mockData/ideas/ideas";
import moment from "moment";

/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: "/api",
    configs: [
      {
        path: "/news",
        method: "get",
        routes: [
          {
            entities: {
              headers: { action: "getPosts" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const posts = data;
                if (!posts) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Новости не найдены",
                  };
                }
                return posts;
              },
            },
          },
          {
            entities: {
              headers: { action: "getPost" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const id = request.query.id;

                const post = data.find((item) => item.id === parseInt(id));
                if (!post) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Пост не найден",
                  };
                }
                return post;
              },
            },
          },
          {
            entities: {
              headers: { action: "getLatestNews" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const id = request.query.id;

                const currentDate = new Date();

                const filteredNews = data
                  .filter(
                    (item) =>
                      item.id !== parseInt(id) ||
                      data.filter((n) => n.date > currentDate).length > 1
                  )
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 3);

                if (!filteredNews) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Последние новости не найдены",
                  };
                }
                return filteredNews;
              },
            },
          },
        ],
      },

      {
        path: "/news",
        method: "put",
        routes: [
          {
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, action } = request.body;

                const post = data.find((item) => item.id === parseInt(id));
                if (!post) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Пост не найден",
                  };
                }
                if (action === "add") {
                  post.likes += 1;
                  post.isLiked = true;
                } else {
                  post.likes -= 1;
                  post.isLiked = false;
                }
                return post;
              },
            },
          },
        ],
      },
      {
        path: "/news",
        method: "post",
        routes: [
          {
            data: news,
            entities: {
              headers: { action: "postComment" },
            },
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, avatar, author, text, date } = request.body;

                const post = data.find((item) => item.id === parseInt(id));

                if (!post) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Комментарий не найден",
                  };
                }

                const newComment = {
                  id: post.comments.length + 1,
                  author: author,
                  text: text,
                  avatar: avatar,
                  date: date,
                };

                post.comments.push(newComment);

                return post.comments;
              },
            },
          },
        ],
      },
      {
        path: "/ideas",
        method: "get",
        routes: [
          {
            data: ideas,
            entities: {
              headers: { action: "getIdeas" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const getIdeas = data;
                if (!getIdeas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }
                return getIdeas;
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
