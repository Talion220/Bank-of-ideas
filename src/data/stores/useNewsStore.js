import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import {
  getLatestNews,
  getPost,
  setLike,
  postComment,
  getPosts,
} from "../../api/news/news";
import { useParams } from "react-router-dom";

const useNewsStore = create((set, get) => ({
  loading: false,
  news: {},
  comments: [],
  likes: {},
  // id: () => {
  //   const { id } = useParams();
  //   return id;
  // },
  getAllNews: async () => {
    try {
      const data = await getPosts();
      data.forEach((post) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [post.id]: { isLiked: post.isLiked, count: post.likes },
          },
        }));
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getData: async (id) => {
    set({ loading: true });
    try {
      const data = await getPost({ id });
      set({
        news: data,
        comments: data.comments,
        loading: false,
        likes: {
          ...get().likes,
          [id]: { isLiked: data.isLiked, count: data.likes },
        },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ loading: false });
    }
  },
  clickLike: async (id) => {
    const newIsLiked = !get().likes[id]?.isLiked;
    const action = newIsLiked ? "add" : "remove";
    try {
      const data = await setLike({ id, action });
      set((state) => ({
        likes: {
          ...state.likes,
          [id]: { isLiked: newIsLiked, count: data.likes },
        },
      }));
    } catch (error) {
      console.error("Error:", error);
    }
  },
  commUpd: () => {
    const news = get().news;
    set({ comments: news.comments });
  },
  // postComm: async (id) => {
  //   const date = new Date().toISOString();
  //   try {
  //     postComment({
  //       id,
  //       avatar: get().news.avatar,
  //       author: get().news.author,
  //       text,
  //       date,
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // },
  getLatest: async (id) => {
    try {
      const latestNews = await getLatestNews({ id });
      latestNews.forEach((post) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [post.id]: { isLiked: post.isLiked, count: post.likes },
          },
        }));
      });
      return latestNews;
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useNewsStore;
