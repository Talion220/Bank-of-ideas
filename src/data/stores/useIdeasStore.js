import { create } from "zustand";

import {
  //   getLatestIdeas,
  getIdea,
  setLike,
  //   getIdeas,
  postComment,
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
  // idIdeas: null,
  // getId: (id) => {
  //   set({
  //     idIdeas: id,
  //   });
  // },
  //   getAllIdeas: async (page, inputValue) => {
  //     set({ AllIdeasLoading: true });
  //     try {
  //       const data = await getIdeas({
  //         page,
  //         limit: get().limitIdeas,
  //         inputValue,
  //       });
  //       data.posts.forEach((post) => {
  //         set((state) => ({
  //           likes: {
  //             ...state.likes,
  //             [post.id]: { isLiked: post.isLiked, count: post.likes },
  //           },
  //         }));
  //       });
  //       set({
  //         allIdeasData: data.posts,
  //         totalIdeas: data.total,
  //         AllIdeasLoading: false,
  //       });

  //       console.log(get().allIdeasData);
  //       return data;
  //     } catch (error) {
  //       console.error("Error:", error);
  //     } finally {
  //       set({ AllIdeasLoading: false });
  //     }
  //   },
  getIdeaPage: async (id) => {
    set({ IdeaPageLoading: true });
    try {
      const data = await getIdea({ id });
      set({
        idea: data,
        comments: data.comments,
        commentsLength: data.comments.length,
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
  postComm: async (id, avatar, author, text, date) => {
    try {
      const data = await postComment({ id, avatar, author, text, date });
      set({
        comments: data,
        commentsLength: data.length,
      });
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  },
  //   getLatest: async (id, count) => {
  //     try {
  //       const latestIdeas = await getLatestIdeas({ id, count });
  //       latestIdeas.forEach((post) => {
  //         set((state) => ({
  //           likes: {
  //             ...state.likes,
  //             [post.id]: { isLiked: post.isLiked, count: post.likes },
  //           },
  //         }));
  //       });
  //       return latestIdeas;
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   },
}));

export default useIdeasStore;
