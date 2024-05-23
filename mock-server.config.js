import { news } from "./src/data/mock/mockData/news/news";
import { ideas } from "./src/data/mock/mockData/ideas/ideas";

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
                let comments;
                const reversedNews = [...data].reverse();
                const skip = (parseInt(page) - 1) * parseInt(limit);
                if (inputValue) {
                  const searchData = reversedNews.filter((index) => {
                    return index.title
                      .toLowerCase()
                      .includes(inputValue.trim().toLowerCase());
                  });
                  posts = searchData.slice(skip, skip + parseInt(limit));
                  totalPosts = searchData.length;
                } else {
                  totalPosts = reversedNews.length;
                  posts = reversedNews.slice(skip, skip + parseInt(limit));
                }
                comments = posts.map((post) => {
                  const lastTwoComments = post.comments.slice(-2).reverse();
                  return lastTwoComments;
                });

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
                post.views += 1;
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
                const reversedNews = [...data].reverse();
                const filteredNews = reversedNews
                  .filter((item) => item.id !== parseInt(id))
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
                const { id, avatar, author, text } = request.body;

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
                  author,
                  text,
                  avatar,
                  date: new Date().toISOString(),
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
            entities: {
              headers: { action: "getIdeas" },
            },
            data: ideas,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { page, limit, inputValue } = request.query;
                let ideas;
                let totalIdeas;
                const reversedData = [...data].reverse();
                const skip = (parseInt(page) - 1) * parseInt(limit);
                if (inputValue) {
                  const searchData = reversedData.filter((index) => {
                    return index.title
                      .toLowerCase()
                      .includes(inputValue.trim().toLowerCase());
                  });
                  ideas = searchData.slice(skip, skip + parseInt(limit));
                  totalIdeas = searchData.length;
                } else {
                  totalIdeas = reversedData.length;
                  ideas = reversedData.slice(
                    0,
                    parseInt(page) * parseInt(limit)
                  );
                }

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }
                return {
                  total: totalIdeas,
                  ideas: ideas,
                  value: inputValue,
                };
              },
            },
          },
          {
            data: ideas,
            entities: {
              headers: { action: "getIdea" },
            },
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const id = request.query.id;
                const idea = data.find((item) => item.id === parseInt(id));
                idea.views += 1;
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

                const sortedIdeas = data.filter(
                  (item) =>
                    item.businessProcess === currentBusinessProcess &&
                    item.id !== parseInt(id)
                );
                // console.log(sortedIdeas);
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
          {
            entities: {
              headers: { action: "getLatestIdeas" },
            },
            data: ideas,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const count = request.query.count;
                const reversedIdeas = [...data].reverse();
                const filteredIdeas = reversedIdeas.slice(0, count);

                if (!filteredIdeas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Последние идеи не найдены",
                  };
                }
                return filteredIdeas;
              },
            },
          },
          {
            entities: {
              headers: { action: "getHomeStatistics" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                let approved = data.filter(
                  (item) => item.status === "Одобрено"
                );
                let implemented = data.filter(
                  (item) => item.status === "Внедрено"
                );
                const filteredIdeas = {
                  total: data.length,
                  approved: approved.length,
                  implemented: implemented.length,
                };

                if (!filteredIdeas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Последние идеи не найдены",
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
                const { id, avatar, author, text } = request.body;

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
                  author,
                  text,
                  avatar,
                  date: new Date().toISOString(),
                };

                idea.comments.push(newComment);

                return idea.comments;
              },
            },
          },
          {
            data: ideas,
            entities: {
              headers: { action: "postIdea" },
            },
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const {
                  author,
                  avatar,
                  title,
                  category,
                  businessProcess,
                  problem,
                  solution,
                  result,
                  note,
                  coauthors,
                  file,
                } = request.body;

                if (
                  !author ||
                  !title ||
                  !category ||
                  !businessProcess ||
                  !problem ||
                  !solution ||
                  !result
                ) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Недостаточно данных",
                  };
                }

                const newIdea = {
                  id: data.length + 1,
                  author,
                  avatar,
                  title,
                  category,
                  businessProcess,
                  problem,
                  solution,
                  result,
                  note,
                  status: "Опубликована",
                  likes: 0,
                  isLiked: false,
                  views: 0,
                  coauthors,
                  file,
                  date: new Date().toISOString(),
                  comments: [],
                };

                data.push(newIdea);
                return data[data.length - 1];
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
