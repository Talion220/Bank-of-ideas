import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import { getNewsData, setLike } from "../../api/news/news";

const useNewsStore = create((set) => ({
  loading: true,
  id: () => ({ id } = useParams()),
  newsData: [],
  likeCount: 0,
  isLiked: false,
  getData: async () => {
    try {
      const data = await getNewsData();
      set({ newsData: data, loading: false });
    } catch (error) {
      console.error("Error:", error);
      set({ loading: false });
    }
  },
  getCurrentNews: {},
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
