import { create } from "zustand";

const useHomeStore = create((set, get) => ({
  ideasSubmitted: 0,
  ideasApproved: 0,
  ideasImplemented: 0,
  latestNewsData: [],
  latestIdeasData: [],
  getHomeData: async () => {
    const data = null;
    set({
      ideasSubmitted: data.ideasSubmitted,
      ideasApproved: data.ideasApproved,
      ideasImplemented: data.ideasImplemented,
      latestNewsData: data.latestNewsData,
      latestIdeasData: data.latestIdeasData,
    });
  },
}));

export default useHomeStore;
