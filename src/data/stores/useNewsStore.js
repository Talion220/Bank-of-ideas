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
  NewsPageLoading: false,
  AllNewsLoading: false,
  news: {},
  comments: [],
  commentsLength: 0,
  likes: {},
  allNewsData: [],
  totalPosts: 0,
  limitPosts: 10,
  latestCommentsNewsCard: [],
  countLatestNews: 5,
  // idNews: null,
  // getId: (id) => {
  //   set({
  //     idNews: id,
  //   });
  // },
  getAllNews: async (page, inputValue) => {
    set({ AllNewsLoading: true });
    try {
      const data = await getPosts({
        page,
        limit: get().limitPosts,
        inputValue,
      });
      data.posts.forEach((post) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [post.id]: { isLiked: post.isLiked, count: post.likes },
          },
        }));
      });
      set({
        allNewsData: data.posts,
        totalPosts: data.total,
        latestCommentsNewsCard: data.comments,
        AllNewsLoading: false,
      });

      console.log(get().allNewsData);
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ AllNewsLoading: false });
    }
  },
  getNewsPage: async (id) => {
    set({ NewsPageLoading: true });
    try {
      const data = await getPost({ id });
      set({
        news: data,
        comments: data.comments,
        commentsLength: data.comments.length,
        NewsPageLoading: false,
        likes: {
          ...get().likes,
          [id]: { isLiked: data.isLiked, count: data.likes },
        },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ NewsPageLoading: false });
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
  postComm: async (id, avatar, author, text) => {
    try {
      const data = await postComment({ id, avatar, author, text });
      set({
        comments: data,
        commentsLength: data.length,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getLatest: async (id) => {
    try {
      const latestNews = await getLatestNews({
        id,
        count: get().countLatestNews,
      });
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
