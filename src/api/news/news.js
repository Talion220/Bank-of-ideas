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
