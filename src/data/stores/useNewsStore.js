import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import {
  getLatestNews,
  getPost,
  setLike,
  getPosts,
  postComment,
} from "../../api/news/news";

const useNewsStore = create((set, get) => ({
  loading: false,
  news: {},
  comments: [],
  commentsLength: 0,
  likes: {},
  // idNews: null,
  // getId: (id) => {
  //   set({
  //     idNews: id,
  //   });
  // },
  getAllNews: async (page, limit, inputValue) => {
    try {
      const data = await getPosts({ page, limit, inputValue });
      data.posts.forEach((post) => {
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
        commentsLength: data.comments.length,
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
  // getComms: async (id) => {
  //   try {
  //     const data = await getComments({ id });
  //     set({
  //       comments: data,
  //       commentsLength: data.length,
  //     });
  //     return data;
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // },
  postComm: async (id, avatar, author, text, date) => {
    try {
      const data = await postComment({ id, avatar, author, text, date });
      set({
        comments: data,
        commentsLength: data.length,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getLatest: async (id, count) => {
    try {
      const latestNews = await getLatestNews({ id, count });
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
