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
  // id: () => {
  //   const { id } = useParams();
  //   return id;
  // },
  getAllNews: async () => {
    try {
      const data = await getPosts();
      const updatedLikes = data.reduce((acc, post) => {
        acc[post.id] = { isLiked: post.isLiked, count: post.likes };
        return acc;
      }, {});
      set({
        likes: updatedLikes,
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
  likes: {},
  clickLike: async (id) => {
    const newIsLiked = !get().likes[id]?.isLiked;
    const action = newIsLiked ? "add" : "remove";
    try {
      await setLike({ id, action }).then((post) =>
        set((state) => ({
          likes: {
            ...state.likes,
            [id]: { isLiked: newIsLiked, count: post.likes },
          },
        }))
      );
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
      const updatedLikes = latestNews.reduce((acc, post) => {
        acc[post.id] = { isLiked: post.isLiked, count: post.likes };
        return acc;
      }, {});
      set({
        likes: updatedLikes,
      });
      return latestNews;
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useNewsStore;
