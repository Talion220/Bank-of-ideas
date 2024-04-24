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
