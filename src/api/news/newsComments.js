import axios from "axios";

export const getNewsData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:31299/api/news-comments"
    );
    return response.data.news;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
