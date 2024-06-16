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
                const comments = posts.map((post) => {
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
                const {
                  page,
                  limit,
                  inputValue,
                  selectTime,
                  selectCategory,
                  selectFilials,
                  selectViews,
                  selectLikes,
                  selectComments,
                  selectStatus,
                  selectBusinessProcess,
                } = request.query;

                let filteredData = [...data].reverse();

                if (inputValue) {
                  filteredData = filteredData.filter((idea) =>
                    idea.title
                      .toLowerCase()
                      .includes(inputValue.trim().toLowerCase())
                  );
                }

                if (selectTime && selectTime !== "Все") {
                  const now = new Date();
                  filteredData = filteredData.filter((idea) => {
                    const ideaDate = new Date(idea.date);
                    switch (selectTime) {
                      case "За год":
                        return now - ideaDate <= 365 * 24 * 60 * 60 * 1000;
                      case "За месяц":
                        return now - ideaDate <= 30 * 24 * 60 * 60 * 1000;
                      case "За неделю":
                        return now - ideaDate <= 7 * 24 * 60 * 60 * 1000;
                      case "За день":
                        return now - ideaDate <= 24 * 60 * 60 * 1000;
                      default:
                        return true;
                    }
                  });
                }

                if (selectCategory && selectCategory !== "Все") {
                  filteredData = filteredData.filter(
                    (idea) => idea.category === selectCategory
                  );
                }

                if (selectFilials && selectFilials !== "Все") {
                  filteredData = filteredData.filter(
                    (idea) => idea.filial === selectFilials
                  );
                }

                if (selectViews && selectViews !== "Все") {
                  filteredData = filteredData.sort((a, b) => {
                    if (selectViews === "Больше всего просмотров") {
                      return b.views - a.views;
                    } else if (selectViews === "Меньше всего просмотров") {
                      return a.views - b.views;
                    }
                    return 0;
                  });
                }

                if (selectLikes && selectLikes !== "Все") {
                  filteredData = filteredData.sort((a, b) => {
                    if (selectLikes === "Больше всего лайков") {
                      return b.likes - a.likes;
                    } else if (selectLikes === "Меньше всего лайков") {
                      return a.likes - b.likes;
                    }
                    return 0;
                  });
                }

                if (selectComments && selectComments !== "Все") {
                  filteredData = filteredData.sort((a, b) => {
                    if (selectComments === "Больше всего комментариев") {
                      return b.comments.length - a.comments.length;
                    } else if (selectComments === "Меньше всего комментариев") {
                      return a.comments.length - b.comments.length;
                    }
                    return 0;
                  });
                }

                if (selectStatus && selectStatus !== "Все") {
                  filteredData = filteredData.filter(
                    (idea) => idea.status === selectStatus
                  );
                }

                if (selectBusinessProcess && selectBusinessProcess !== "Все") {
                  filteredData = filteredData.filter(
                    (idea) => idea.businessProcess === selectBusinessProcess
                  );
                }

                const totalIdeas = filteredData.length;
                const ideas = filteredData.slice(
                  0,
                  parseInt(page) * parseInt(limit)
                );

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
            entities: {
              headers: { action: "getMyIdeas" },
            },
            data: ideas,
            interceptors: {
              response: (data, { request, setStatusCode }) => {
                const { page, limit, selectCategory, user } = request.query;

                let filteredData = [...data]
                  .reverse()
                  .filter((idea) => idea.author === user);

                if (selectCategory && selectCategory !== "Все") {
                  filteredData = filteredData.filter(
                    (idea) => idea.category === selectCategory
                  );
                }

                const totalIdeas = filteredData.length;
                const ideas = filteredData.slice(
                  0,
                  parseInt(page) * parseInt(limit)
                );

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
                };
              },
            },
          },
          {
            entities: {
              headers: { action: "getAnalytics" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                ideasData = [...data];
                const implemented = ideasData.filter(
                  (index) => index.status === "Внедрено"
                );
                const activeUsers = ideasData
                  .map((item) => item.author)
                  .filter(
                    (author, index, authorsArray) =>
                      authorsArray.indexOf(author) === index
                  );
                ideasPerEmployee = (
                  ideasData.length / activeUsers.length
                ).toFixed(2);

                const currentDate = new Date().toISOString();
                const sortedIdeas = ideasData.sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                });

                const earliestDate = new Date(
                  sortedIdeas[sortedIdeas.length - 1].date
                );
                const latestDate = new Date(currentDate);

                const totalIdeas = sortedIdeas.length;

                const timeDifference = latestDate - earliestDate;
                const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

                const ideasPerDay = (totalIdeas / daysDifference).toFixed(2);

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }

                return {
                  allIdeas: ideasData.length,
                  ideasImplemented: implemented.length,
                  ideasPerEmployee: ideasPerEmployee,
                  ideasPerDay: ideasPerDay,
                };
              },
            },
          },
          {
            entities: {
              headers: { action: "getAllIdeas" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                const allIdeasFilials = [
                  { filial: "ИА", filialIdeas: 0 },
                  { filial: "Алтайэнерго", filialIdeas: 0 },
                  { filial: "Бурятэнерго", filialIdeas: 0 },
                  { filial: "Красноярскэнерго", filialIdeas: 0 },
                  { filial: "Кузбассэнерго", filialIdeas: 0 },
                  { filial: "Омскэнерго", filialIdeas: 0 },
                  { filial: "Хакасэнерго", filialIdeas: 0 },
                  { filial: "Читаэнерго", filialIdeas: 0 },
                  { filial: "Тываэнерго", filialIdeas: 0 },
                ];

                const allIdeasBusinessProcesses = [
                  {
                    businessProcess: "Бизнес-процесс 1",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 2",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 3",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 4",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 5",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 6",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 7",
                    businessProcessIdeas: 0,
                  },
                ];

                data.forEach((idea) => {
                  const filialIndex = allIdeasFilials.findIndex(
                    (item) => item.filial === idea.filial
                  );
                  if (filialIndex !== -1) {
                    allIdeasFilials[filialIndex].filialIdeas += 1;
                  }
                });

                data.forEach((idea) => {
                  const businessProcessIndex =
                    allIdeasBusinessProcesses.findIndex(
                      (item) => item.businessProcess === idea.businessProcess
                    );
                  if (businessProcessIndex !== -1) {
                    allIdeasBusinessProcesses[
                      businessProcessIndex
                    ].businessProcessIdeas += 1;
                  }
                });

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }

                return {
                  allIdeasFilials: allIdeasFilials,
                  allIdeasBusinessProcesses: allIdeasBusinessProcesses,
                };
              },
            },
          },
          {
            entities: {
              headers: { action: "getIdeasImplemented" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                const ideasImplementedFilials = [
                  { filial: "ИА", filialIdeas: 0 },
                  { filial: "Алтайэнерго", filialIdeas: 0 },
                  { filial: "Бурятэнерго", filialIdeas: 0 },
                  { filial: "Красноярскэнерго", filialIdeas: 0 },
                  { filial: "Кузбассэнерго", filialIdeas: 0 },
                  { filial: "Омскэнерго", filialIdeas: 0 },
                  { filial: "Хакасэнерго", filialIdeas: 0 },
                  { filial: "Читаэнерго", filialIdeas: 0 },
                  { filial: "Тываэнерго", filialIdeas: 0 },
                ];

                const ideasImplementedBusinessProcesses = [
                  {
                    businessProcess: "Бизнес-процесс 1",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 2",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 3",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 4",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 5",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 6",
                    businessProcessIdeas: 0,
                  },
                  {
                    businessProcess: "Бизнес-процесс 7",
                    businessProcessIdeas: 0,
                  },
                ];

                data.forEach((idea) => {
                  if (idea.status === "Внедрено") {
                    const filialIndex = ideasImplementedFilials.findIndex(
                      (item) => item.filial === idea.filial
                    );
                    if (filialIndex !== -1) {
                      ideasImplementedFilials[filialIndex].filialIdeas += 1;
                    }
                  }
                });

                data.forEach((idea) => {
                  if (idea.status === "Внедрено") {
                    const businessProcessIndex =
                      ideasImplementedBusinessProcesses.findIndex(
                        (item) => item.businessProcess === idea.businessProcess
                      );
                    if (businessProcessIndex !== -1) {
                      ideasImplementedBusinessProcesses[
                        businessProcessIndex
                      ].businessProcessIdeas += 1;
                    }
                  }
                });

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }

                return {
                  ideasImplementedFilials: ideasImplementedFilials,
                  ideasImplementedBusinessProcesses:
                    ideasImplementedBusinessProcesses,
                };
              },
            },
          },
          {
            entities: {
              headers: { action: "getIdeasPerEmployee" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                // const ideasPerEmployeeFilials = [
                //   { filial: "ИА", filialIdeas: 0 },
                //   { filial: "Алтайэнерго", filialIdeas: 0 },
                //   { filial: "Бурятэнерго", filialIdeas: 0 },
                //   { filial: "Красноярскэнерго", filialIdeas: 0 },
                //   { filial: "Кузбассэнерго", filialIdeas: 0 },
                //   { filial: "Омскэнерго", filialIdeas: 0 },
                //   { filial: "Хакасэнерго", filialIdeas: 0 },
                //   { filial: "Читаэнерго", filialIdeas: 0 },
                //   { filial: "Тываэнерго", filialIdeas: 0 },
                // ];

                // const ideasPerEmployeeBusinessProcesses = [
                //   {
                //     businessProcess: "Бизнес-процесс 1",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 2",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 3",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 4",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 5",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 6",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 7",
                //     businessProcessIdeas: 0,
                //   },
                // ];

                ideasData = [...data];
                const implemented = ideasData.filter(
                  (index) => index.status === "Внедрено"
                );
                const activeUsers = ideasData
                  .map((item) => item.author)
                  .filter(
                    (author, index, authorsArray) =>
                      authorsArray.indexOf(author) === index
                  );
                ideasPerEmployee = (
                  ideasData.length / activeUsers.length
                ).toFixed(2);

                // data.forEach((idea) => {
                //   if (idea.status === "Внедрено") {
                //     const filialIndex = ideasPerEmployeeFilials.findIndex(
                //       (item) => item.filial === idea.filial
                //     );
                //     if (filialIndex !== -1) {
                //       ideasPerEmployeeFilials[filialIndex].filialIdeas += 1;
                //     }
                //   }
                // });

                // data.forEach((idea) => {
                //   if (idea.status === "Внедрено") {
                //     const businessProcessIndex =
                //       ideasPerEmployeeBusinessProcesses.findIndex(
                //         (item) => item.businessProcess === idea.businessProcess
                //       );
                //     if (businessProcessIndex !== -1) {
                //       ideasPerEmployeeBusinessProcesses[
                //         businessProcessIndex
                //       ].businessProcessIdeas += 1;
                //     }
                //   }
                // });

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }

                // return {
                //   ideasPerEmployeeFilials: ideasPerEmployeeFilials,
                //   ideasPerEmployeeBusinessProcesses:
                //     ideasPerEmployeeBusinessProcesses,
                // };
              },
            },
          },
          {
            entities: {
              headers: { action: "getIdeasPerDay" },
            },
            data: ideas,
            interceptors: {
              response: (data, { setStatusCode }) => {
                // const ideasPerDayFilials = [
                //   { filial: "ИА", filialIdeas: 0 },
                //   { filial: "Алтайэнерго", filialIdeas: 0 },
                //   { filial: "Бурятэнерго", filialIdeas: 0 },
                //   { filial: "Красноярскэнерго", filialIdeas: 0 },
                //   { filial: "Кузбассэнерго", filialIdeas: 0 },
                //   { filial: "Омскэнерго", filialIdeas: 0 },
                //   { filial: "Хакасэнерго", filialIdeas: 0 },
                //   { filial: "Читаэнерго", filialIdeas: 0 },
                //   { filial: "Тываэнерго", filialIdeas: 0 },
                // ];

                // const ideasPerDayBusinessProcesses = [
                //   {
                //     businessProcess: "Бизнес-процесс 1",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 2",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 3",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 4",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 5",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 6",
                //     businessProcessIdeas: 0,
                //   },
                //   {
                //     businessProcess: "Бизнес-процесс 7",
                //     businessProcessIdeas: 0,
                //   },
                // ];

                // ideasData = [...data];
                // const implemented = ideasData.filter(
                //   (index) => index.status === "Внедрено"
                // );
                // const activeUsers = ideasData
                //   .map((item) => item.author)
                //   .filter(
                //     (author, index, authorsArray) =>
                //       authorsArray.indexOf(author) === index
                //   );
                // ideasPerDay = (
                //   ideasData.length / activeUsers.length
                // ).toFixed(2);

                // data.forEach((idea) => {
                //   if (idea.status === "Внедрено") {
                //     const filialIndex = ideasPerDayFilials.findIndex(
                //       (item) => item.filial === idea.filial
                //     );
                //     if (filialIndex !== -1) {
                //       ideasPerDayFilials[filialIndex].filialIdeas += 1;
                //     }
                //   }
                // });

                // data.forEach((idea) => {
                //   if (idea.status === "Внедрено") {
                //     const businessProcessIndex =
                //       ideasPerDayBusinessProcesses.findIndex(
                //         (item) => item.businessProcess === idea.businessProcess
                //       );
                //     if (businessProcessIndex !== -1) {
                //       ideasPerDayBusinessProcesses[
                //         businessProcessIndex
                //       ].businessProcessIdeas += 1;
                //     }
                //   }
                // });

                if (!ideas) {
                  setStatusCode(404);
                  return {
                    code: 404,
                    success: false,
                    message: "Идеи не найдены",
                  };
                }

                // return {
                //   ideasPerDayFilials: ideasPerDayFilials,
                //   ideasPerDayBusinessProcesses:
                //     ideasPerDayBusinessProcesses,
                // };
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
            data: ideas,
            entities: {
              headers: { action: "getLifeCycle" },
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
                  filial: "Красноярскэнерго",
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
                  linkAuthor: "/profile",
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
