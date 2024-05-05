import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import { getLatestNews, getPost, setLike } from "../../api/news/news";
import { useParams } from "react-router-dom";

const useNewsStore = create((set, get) => ({
  loading: false,
  news: {},
  likeCount: 0,
  isLiked: false,
  // id: () => {
  //   const { id } = useParams();
  //   return id;
  // },
  getData: async (id) => {
    set({ loading: true });
    try {
      const data = await getPost({ id });
      console.log(id);
      set({
        news: data,
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

  clickLike: async (id) => {
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
  getLatest: async (id) => {
    return await getLatestNews({ id });
  },
}));

export default useNewsStore;
