import axios from "axios";

const NEWS_URL = "http://localhost:31299/api/ideas";

axios.defaults.baseURL = NEWS_URL;

export const getIdeas = async () => {
  try {
    const response = await axios.get("", {
      // params: id,
      headers: {
        action: "getIdeas",
      },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const getIdea = async (id) => {
//   try {
//     const response = await axios.get("", {
//       params: id,
//       headers: {
//         action: "getIdea",
//       },
//     });
//     const res = response.data;
//     return res;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// export const setLike = async ({ id, action }) => {
//   try {
//     const response = await axios.put("", {
//       id,
//       action,
//     });
//     const res = await response.data;
//     return res;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     throw error;
//   }
// };

// export const postComment = async ({ id, avatar, author, text, date }) => {
//   try {
//     const response = await axios.post(
//       "",
//       {
//         id,
//         avatar,
//         author,
//         text,
//         date,
//       },
//       {
//         headers: {
//           action: "postComment",
//         },
//       }
//     );
//     const res = response.data;
//     return res;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     throw error;
//   }
// };

// export const getLatestNews = async (id) => {
//   try {
//     const response = await axios.get(
//       "",
//       {
//         params: id,
//         headers: {
//           action: "getLatestNews",
//         },
//       },
//       {}
//     );
//     const res = response.data;
//     return res;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
