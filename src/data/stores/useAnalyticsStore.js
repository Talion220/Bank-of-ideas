import { create } from "zustand";

import { getAllIdeas, getAnalytics } from "../../api/analytics/analytics";

const useAnalyticsStore = create((set, get) => ({
  mainAnalyticsLoading: false,
  mainAnalytics: {},
  allIdeasLoading: false,
  allIdeas: {},
  getMainAnalytics: async () => {
    set({ mainAnalyticsLoading: true });
    try {
      const data = await getAnalytics();
      set({
        mainAnalytics: data,
        mainAnalyticsLoading: false,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ mainAnalyticsLoading: false });
    }
  },
  loadAllIdeas: async () => {
    set({ allIdeasLoading: true });
    try {
      const data = await getAllIdeas();
      set({
        allIdeas: data,
        allIdeasLoading: false,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ allIdeasLoading: false });
    }
  },
}));

export default useAnalyticsStore;
