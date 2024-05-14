import axios from "axios";

const NEWS_URL = "http://localhost:31299/api/news";

export const getPosts = async ({ page, limit, inputValue }) => {
  try {
    const response = await axios.get(NEWS_URL, {
      headers: {
        action: "getPosts",
      },
      params: {
        page,
        limit,
        inputValue,
      },
    });
    const res = response.data;
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(NEWS_URL, {
      params: id,
      headers: {
        action: "getPost",
      },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const setLike = async ({ id, action }) => {
  try {
    const response = await axios.put(NEWS_URL, {
      id,
      action,
    });
    const res = await response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const postComment = async ({ id, avatar, author, text, date }) => {
  try {
    const response = await axios.post(
      NEWS_URL,
      {
        id,
        avatar,
        author,
        text,
        date,
      },
      {
        headers: {
          action: "postComment",
        },
      }
    );
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getLatestNews = async ({ id, count }) => {
  try {
    const response = await axios.get(NEWS_URL, {
      params: { id, count },
      headers: {
        action: "getLatestNews",
      },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
