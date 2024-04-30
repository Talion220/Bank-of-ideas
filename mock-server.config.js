import { news } from "./src/shared/data/news/news";

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
            data: news,
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
                const { id, news, action } = request.body;

                const post = data.find((item) => item.id === String(id));
                if (!post) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Пост не найден",
                  };
                }
                if (action === "add") post.likes += 1;
                else post.likes -= 1;
                return post;
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
            file: "./src/shared/data/ideas/ideas.json",
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
