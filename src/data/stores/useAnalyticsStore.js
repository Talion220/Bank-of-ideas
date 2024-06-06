import { create } from "zustand";

import { getAllIdeas, getAnalytics } from "../../api/analytics/analytics";

const useAnalyticsStore = create((set, get) => ({
  mainAnalyticsLoading: false,
  mainAnalytics: {},
  allIdeasAnalyticsLoading: false,
  allIdeasAnalyticsData: {},
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
  getAllIdeasAnalytics: async () => {
    set({ allIdeasAnalyticsLoading: true });
    try {
      const data = await getAllIdeas();
      set({
        allIdeasAnalyticsData: data,
        allIdeasAnalyticsLoading: false,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ allIdeasAnalyticsLoading: false });
    }
  },
}));

export default useAnalyticsStore;
