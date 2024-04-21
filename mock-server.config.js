// import avatar from "./src/shared/images/avatar.png";
// import newsImg from "./src/shared/images/newsImg.jpg";

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
            data: {
              news: [
                {
                  id: "1",
                  author: "Павлова Мария Алиевна",
                  avatar: "",
                  title: "Новые улучшения компании",
                  text: `«Представляем вам наши новые достижения и улучшения!»
                  С радостью хотим поделиться с вами последними новостями и обновлениями, которые мы внесли в нашу компанию. Мы постоянно работаем над улучшением наших продуктов и услуг, чтобы предоставить нашим клиентам самые качественные и инновационные решения.
                  
                  В этом месяце мы рады представить вам следующие нововведения:
                  
                  Улучшенный пользовательский интерфейс: мы обновили дизайн наших приложений и веб-сайтов, чтобы сделать их более интуитивно понятными и удобными для пользователей. Теперь наши клиенты смогут быстрее и проще находить нужную информацию и функции.
                  Расширенные функциональные возможности: мы добавили новые инструменты и функции, которые позволят нашим пользователям решать задачи ещё эффективнее и быстрее. Это поможет им повысить свою производительность и достичь лучших результатов.
                  Улучшенная безопасность: мы усилили меры безопасности наших систем и данных, чтобы защитить наших клиентов от возможных угроз и атак. Теперь они могут быть уверены в сохранности своих конфиденциальных данных и информации.
                  Улучшенное обслуживание клиентов: мы расширили нашу команду поддержки и улучшили качество обслуживания клиентов. Теперь наши специалисты всегда готовы помочь вам с любыми вопросами и проблемами, связанными с нашими продуктами и услугами.
                  Мы надеемся, что эти нововведения помогут вам улучшить вашу работу и достичь новых успехов. Благодарим вас за доверие и поддержку!`,
                  likes: "12",
                  comments: "2",
                  views: "34",
                  newsImg:
                    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "2",
                  author: "Токарева Варвара Вячеславовна",
                  avatar: "",
                  title: "Frankenstein",
                  text: "Lorem ipsum",
                  likes: "25",
                  comments: "4",
                  views: "86",
                  newsImg:
                    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "3",
                  author: "Куликова Вера Даниэльевна",
                  avatar: "",
                  title: "Solaris",
                  text: "Lorem ipsum",
                  likes: "65",
                  comments: "14",
                  views: "125",
                  newsImg:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "4",
                  author: "Быков Григорий Богданович",
                  avatar: "",
                  title: "Dune",
                  text: "Lorem ipsum",
                  likes: "4",
                  comments: "0",
                  views: "6",
                  newsImg:
                    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "5",
                  author: "Климова Алина Марсельевна",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "6",
                  author: "Соколова Александра Ивановна",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "7",
                  author: "Громов Павел Германович",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "8",
                  author: "Моисеева Маргарита Кирилловна",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "9",
                  author: "Гаврилова Екатерина Марковна",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
                {
                  id: "10",
                  author: "Кононова Таисия Алиевна",
                  avatar: "",
                  title: "The Left Hand of Darkness",
                  text: "Lorem ipsum",
                  likes: "16",
                  comments: "1",
                  views: "47",
                  newsImg: "",
                  linkAuthor: "/profile",
                  date: "11 апреля 2024",
                },
              ],
            },
          },
        ],
      },
      {
        path: "/search",
        method: "get",
        routes: [
          {
            data: {
              ideas: [],
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
