import { configureStore } from "@reduxjs/toolkit";
import paginateAllReducer from "./blogSlices/paginateAllSlices";
import recentBlogsReducer from "./blogSlices/recentBlogs";
import lastThreeBlogsReducer from "./blogSlices/lastThreeBlogs";
import lastTenPostsReducer from "./blogSlices/lastTenPosts";

export const store = configureStore({
  reducer: {
    blog: paginateAllReducer,
    recentBlogs: recentBlogsReducer,
    lastThreeBlogs: lastThreeBlogsReducer,
    lastNinePosts: lastTenPostsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;