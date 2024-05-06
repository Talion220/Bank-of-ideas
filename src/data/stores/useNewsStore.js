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
        likeCount: data.likes,
        isLiked: data.isLiked,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ loading: false });
    }
  },
  likeCount: 0,
  isLiked: false,
  clickLike: (id) => {
    const newIsLiked = !get().isLiked;
    const action = newIsLiked ? "add" : "remove";
    try {
      setLike({ id, action }).then((post) =>
        set({ likeCount: post.likes, isLiked: newIsLiked })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  },
  commUpd: () => {
    const news = get().news;
    set({ comments: news.comments });
    console.log(news.comments);
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
    return await getLatestNews({ id });
  },
}));

export default useNewsStore;
