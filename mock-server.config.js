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
