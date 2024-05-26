import axios from "axios";

const IDEAS_URL = "http://localhost:31299/api/ideas";

export const getAnalytics = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
      headers: { action: "getAnalytics" },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
