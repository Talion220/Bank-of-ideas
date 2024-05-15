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
            data: news.reverse(),
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { page, limit, inputValue } = request.query;
                let posts;
                let totalPosts;
                let comments;
                const skip = (parseInt(page) - 1) * parseInt(limit);
                if (inputValue) {
                  const searchData = data.filter((index) => {
                    return index.title
                      .toLowerCase()
                      .includes(inputValue.trim().toLowerCase());
                  });
                  posts = searchData.slice(skip, skip + parseInt(limit));
                  totalPosts = searchData.length;

                  comments = posts.map((post) => {
                    const lastTwoComments = post.comments.reverse().slice(0, 2);
                    console.log(lastTwoComments);
                    return lastTwoComments;
                  });
                } else {
                  totalPosts = data.length;
                  posts = data.slice(skip, skip + parseInt(limit));
                  comments = posts.map((post) => {
                    const lastTwoComments = post.comments.reverse().slice(0, 2);
                    return lastTwoComments;
                  });
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
                  comments: comments,
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
          {
            entities: {
              headers: { action: "getLatestNews" },
            },
            data: news,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, count } = request.query;

                const filteredNews = data
                  .filter((item) => item.id !== parseInt(id))
                  .reverse()
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
              headers: { action: "getIdea" },
            },
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const id = request.query.id;
                const idea = data.find((item) => item.id === parseInt(id));
                if (!idea) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идея не найдена",
                  };
                }
                return idea;
              },
            },
          },
          {
            entities: {
              headers: { action: "getSameIdeas" },
            },
            data: ideas,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, count } = request.query;
                const currentBusinessProcess = data[id - 1].businessProcess;
                console.log(currentBusinessProcess);

                const sortedIdeas = data.filter(
                  (item) =>
                    item.businessProcess === currentBusinessProcess &&
                    item.id !== parseInt(id)
                );
                const filteredIdeas = sortedIdeas.reverse().slice(0, count);

                if (!filteredIdeas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи по такому же бизнесс процессу не найдены",
                  };
                }
                return filteredIdeas;
              },
            },
          },
        ],
      },
      {
        path: "/ideas",
        method: "put",
        routes: [
          {
            data: ideas,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, action } = request.body;

                const idea = data.find((item) => item.id === parseInt(id));
                if (!idea) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Пост не найден",
                  };
                }
                if (action === "add") {
                  idea.likes += 1;
                  idea.isLiked = true;
                } else {
                  idea.likes -= 1;
                  idea.isLiked = false;
                }
                return idea;
              },
            },
          },
        ],
      },
      {
        path: "/ideas",
        method: "post",
        routes: [
          {
            data: ideas,
            entities: {
              headers: { action: "postComment" },
            },
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { id, avatar, author, text, date } = request.body;

                const idea = data.find((item) => item.id === parseInt(id));

                if (!idea) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Комментарий не найден",
                  };
                }

                const newComment = {
                  id: idea.comments.length + 1,
                  author: author,
                  text: text,
                  avatar: avatar,
                  date: date,
                };

                idea.comments.push(newComment);

                return idea.comments;
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
