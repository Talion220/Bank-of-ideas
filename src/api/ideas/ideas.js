import axios from "axios";

const IDEAS_URL = "http://localhost:31299/api/ideas";

export const getIdeas = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
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

export const getIdea = async (id) => {
  try {
    const response = await axios.get(IDEAS_URL, {
      params: id,
      headers: {
        action: "getIdea",
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
    const response = await axios.put(IDEAS_URL, {
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
      IDEAS_URL,
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

export const getSameIdeas = async ({ id, count }) => {
  try {
    const response = await axios.get(IDEAS_URL, {
      params: { id, count },
      headers: {
        action: "getSameIdeas",
      },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
