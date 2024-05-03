import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import { getPost, setLike } from "../../api/news/news";
import { useParams } from "react-router-dom";

const useNewsStore = create((set) => ({
  loading: false,
  news: {},
  likeCount: 0,
  isLiked: false,
  id: () => {
    const { id } = useParams();
    return id;
  },
  getData: async (set) => {
    try {
      set({ loading: true });
      const id = useParams().id;
      const data = await getPost({ id });
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

  setLike: async (id, action) => {
    try {
      const post = await setLike({ id, action });
      set({ likeCount: post.likes });
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useNewsStore;
