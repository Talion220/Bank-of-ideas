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

export const getAllIdeas = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
      headers: { action: "getAllIdeas" },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getIdeasImplemented = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
      headers: { action: "getIdeasImplemented" },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getIdeasPerEmployee = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
      headers: { action: "getIdeasPerEmployee" },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getIdeasPerDay = async () => {
  try {
    const response = await axios.get(IDEAS_URL, {
      headers: { action: "getIdeasPerDay" },
    });
    const res = response.data;
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
