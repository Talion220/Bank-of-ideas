import { create } from "zustand";

import { getAnalytics } from "../../api/analytics/analytics";

const useAnalyticsStore = create((set, get) => ({
  mainAnalyticsLoading: false,
  mainAnalytics: {},
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
}));

export default useAnalyticsStore;
