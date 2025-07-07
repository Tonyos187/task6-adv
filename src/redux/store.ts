import { configureStore } from "@reduxjs/toolkit";
import paginateAllReducer from "./blogSlices/paginateAllSlices";
import recentBlogsReducer from "./blogSlices/recentBlogs";

export const store = configureStore({
  reducer: {
    blog: paginateAllReducer,
    recentBlogs: recentBlogsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;