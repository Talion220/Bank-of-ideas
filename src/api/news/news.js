import axios from "axios";

export const getNewsData = async (id) => {
  try {
    const response = await axios.get("http://localhost:31299/api/news", {
      params: id,
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
    const response = await axios.put("http://localhost:31299/api/news", {
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

export const getLatestNews = async (id) => {
  try {
    const response = await axios.get("http://localhost:31299/api/news", {
      params: id,
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
