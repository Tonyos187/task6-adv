import { createSlice } from "@reduxjs/toolkit";
import blogsData from "../../data/blogsData";
import type { Blog } from "./paginateAllSlices";
import type { RootState } from "../store";

interface LastThreeBlogsState {
  lastThreeBlogs: Blog[];
}

const initialState: LastThreeBlogsState = {
  lastThreeBlogs: blogsData.slice(-3), // Get the last 3 posts
};

const lastThreeBlogsSlice = createSlice({
  name: "lastThreeBlogs",
  initialState,
  reducers: {},
});

export default lastThreeBlogsSlice.reducer;

export const selectLastThreePosts = (state: RootState) =>
  state.lastThreeBlogs.lastThreeBlogs; 