import { createSlice } from "@reduxjs/toolkit";
import blogsData from "../../data/blogsData";
import type { Blog } from "./paginateAllSlices";

interface RecentBlogsState {
  recentBlogs: Blog[];
}

const initialState: RecentBlogsState = {
  recentBlogs: blogsData.slice(-4),
};

const recentBlogsSlice = createSlice({
  name: "recentBlogs",
  initialState,
  reducers: {},
});

export default recentBlogsSlice.reducer;

export const selectRecentBlogs = (state: { recentBlogs: RecentBlogsState }) =>
  state.recentBlogs.recentBlogs;
