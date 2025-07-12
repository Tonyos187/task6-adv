import { createSlice } from "@reduxjs/toolkit";
import blogsData from "../../data/blogsData";
import type { Blog } from "./paginateAllSlices";
import type { RootState } from "../store";

interface LastNinePostsState {
  lastNinePosts: Blog[];
}

const initialState: LastNinePostsState = {
  lastNinePosts: blogsData.slice(-10), // Get the last 9 posts
};

const lastNinePostsSlice = createSlice({
  name: "lastNinePosts",
  initialState,
  reducers: {},
});

export default lastNinePostsSlice.reducer;

export const selectLastNinePosts = (state: RootState) =>
  state.lastNinePosts.lastNinePosts; 