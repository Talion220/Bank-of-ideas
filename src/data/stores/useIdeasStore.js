import { create } from "zustand";

import {
  getSameIdeas,
  getIdea,
  setLike,
  getIdeas,
  postComment,
  postIdea,
  getLatestIdeas,
  getHomeStatistics,
  getMyIdeas,
} from "../../api/ideas/ideas";

const useIdeasStore = create((set, get) => ({
  IdeaPageLoading: false,
  AllIdeasLoading: false,
  idea: {},
  comments: [],
  commentsLength: 0,
  likes: {},
  allIdeasData: [],
  totalIdeas: 0,
  limitIdeas: 10,
  countSameIdeas: 3,
  businessProcess: "",
  category: null,
  setCategory: (category) => {
    set({
      category,
    });
  },
  countLatestIdeas: 5,
  user: "Иванов Иван Иванович",
  allIdeasProfileData: [],
  totalIdeasProfile: 0,
  AllIdeasProfileLoading: false,
  // idIdeas: null,
  // getId: (id) => {
  //   set({
  //     idIdeas: id,
  //   });
  // },
  getAllIdeas: async (
    page,
    inputValue,
    selectTime,
    selectCategory,
    selectFilials,
    selectViews,
    selectLikes,
    selectComments,
    selectStatus,
    selectBusinessProcess
  ) => {
    set({ AllIdeasLoading: true });
    try {
      const data = await getIdeas({
        page,
        limit: get().limitIdeas,
        inputValue,
        selectTime,
        selectCategory,
        selectFilials,
        selectViews,
        selectLikes,
        selectComments,
        selectStatus,
        selectBusinessProcess,
      });
      data.ideas.forEach((idea) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [idea.id]: { isLiked: idea.isLiked, count: idea.likes },
          },
        }));
      });
      set({
        allIdeasData: data.ideas,
        totalIdeas: data.total,
        AllIdeasLoading: false,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ AllIdeasLoading: false });
    }
  },
  getProfileIdeas: async (page, selectCategory) => {
    set({ AllIdeasProfileLoading: true });
    try {
      const data = await getMyIdeas({
        page,
        limit: get().limitIdeas,
        selectCategory,
        user: get().user,
      });
      data.ideas.forEach((idea) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [idea.id]: { isLiked: idea.isLiked, count: idea.likes },
          },
        }));
      });
      set({
        allIdeasProfileData: data.ideas,
        totalIdeasProfile: data.total,
        AllIdeasProfileLoading: false,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ AllIdeasLoading: false });
    }
  },
  getIdeaPage: async (id) => {
    set({ IdeaPageLoading: true });
    try {
      const data = await getIdea({ id });
      set({
        idea: data,
        comments: data.comments,
        commentsLength: data.comments.length,
        businessProcess: data.businessProcess,
        IdeaPageLoading: false,
        likes: {
          ...get().likes,
          [id]: { isLiked: data.isLiked, count: data.likes },
        },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      set({ IdeaPageLoading: false });
    }
  },
  clickLike: async (id) => {
    const ideaIsLiked = !get().likes[id]?.isLiked;
    const action = ideaIsLiked ? "add" : "remove";
    try {
      const data = await setLike({ id, action });
      set((state) => ({
        likes: {
          ...state.likes,
          [id]: { isLiked: ideaIsLiked, count: data.likes },
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
  getSame: async (id) => {
    try {
      const sameIdeas = await getSameIdeas({ id, count: get().countSameIdeas });
      sameIdeas.forEach((idea) => {
        set((state) => ({
          likes: {
            ...state.likes,
            [idea.id]: { isLiked: idea.isLiked, count: idea.likes },
          },
        }));
      });
      return sameIdeas;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  postNewIdea: async (
    author,
    avatar,
    title,
    category,
    businessProcess,
    problem,
    solution,
    result,
    note,
    coauthors,
    file
  ) => {
    try {
      const data = await postIdea({
        author,
        avatar,
        title,
        category,
        businessProcess,
        problem,
        solution,
        result,
        note,
        coauthors,
        file,
      });
      set({
        allIdeasData: [...get().allIdeasData, data],
        likes: {
          ...get().likes,
          [data.id]: { isLiked: data.isLiked, count: data.likes },
        },
      });
      console.log(get().likes);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getLatest: async () => {
    try {
      const latestIdeas = await getLatestIdeas({
        count: get().countLatestIdeas,
      });
      return latestIdeas;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getHomeStats: async () => {
    try {
      const statistics = await getHomeStatistics({
        count: get().countLatestIdeas,
      });
      return statistics;
    } catch (error) {
      console.error("Error:", error);
    }
  },
}));

export default useIdeasStore;
