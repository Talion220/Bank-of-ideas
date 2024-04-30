import axios from "axios";

export const getNewsData = async () => {
  try {
    const response = await axios.get("http://localhost:31299/api/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addLike = async ({ id, news, action }) => {
  try {
    // const response = await axios.get("http://localhost:31299/api/news");
    // const news = response.data[id - 1];
    // news.likes += 1;
    // await axios.put("http://localhost:31299/api/news", { news });
    // console.log(news.likes);
    // return news.likes;

    const response = await axios.put("http://localhost:31299/api/news", {
      id,
      news,
      action,
    });
    const res = await response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const removeLike = async (id) => {
  try {
    const response = await axios.get("http://localhost:31299/api/news");
    const news = response.data[id - 1];
    news.likes -= 1;
    await axios.put("http://localhost:31299/api/news", { news });
    console.log(news.likes);
    return news.likes;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
