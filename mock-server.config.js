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
                const { page, limit, inputValue } = request.query;
                let posts;
                let totalPosts;
                const skip = (parseInt(page) - 1) * parseInt(limit);
                if (inputValue) {
                  const searchData = data.filter((index) => {
                    return index.title
                      .toLowerCase()
                      .includes(inputValue.trim().toLowerCase());
                  });
                  posts = searchData.slice(skip, skip + parseInt(limit));
                  totalPosts = searchData.length;
                } else {
                  totalPosts = data.length;
                  posts = data.slice(skip, skip + parseInt(limit));
                }

                if (!posts) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Новости не найдены",
                  };
                }
                return {
                  total: totalPosts,
                  posts: posts,
                  value: inputValue,
                };
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
          // {
          //   entities: {
          //     headers: { action: "getComments" },
          //   },
          //   data: news,
          //   interceptors: {
          //     response: (data, { request, setStatusCode }) => {
          //       const id = request.query.id;

          //       const post = data.find((item) => item.id === parseInt(id));
          //       const comments = post.comments;
          //       if (!post) {
          //         setStatusCode(404);
          //         return {
          //           code: 404,
          //           success: false,
          //           message: "Пост не найден",
          //         };
          //       }
          //       return comments;
          //     },
          //   },
          // },
          {
            entities: {
              headers: { action: "getLatestNews" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, count } = request.query;

                const currentDate = new Date();

                const filteredNews = data
                  .filter(
                    (item) =>
                      item.id !== parseInt(id) ||
                      data.filter((n) => n.date > currentDate).length > 1
                  )
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, count);

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
                console.log(post);

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
