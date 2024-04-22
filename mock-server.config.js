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
            file: "./src/shared/data/news/news.json",
          },
        ],
      },
      {
        path: "/news-comments",
        method: "get",
        routes: [
          {
            file: "./src/shared/data/news/news-comments.json",
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
      {
        path: "/ideas-comments",
        method: "get",
        routes: [
          {
            file: "./src/shared/data/ideas/ideas-comments.json",
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
