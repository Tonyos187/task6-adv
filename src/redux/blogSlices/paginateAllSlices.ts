import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import blogsData from "../../data/blogsData";

export type Blog = {
  id: number;
  mainImage: string;
  date: string;
  title: string;
  mainDescription: string;
  sections: {
    image: string;
    content: string;
  }[];
  categories: string[];
};

interface BlogState {
  blogs: Blog[];
  currentPage: number;
  blogsPerPage: number;
}
const initialState: BlogState = {
  blogs: blogsData,
  currentPage: 1,
  blogsPerPage: 6,
};
const paginateAllSlice = createSlice({
  name: "paginateAll",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setBlogs, setCurrentPage } = paginateAllSlice.actions;
export default paginateAllSlice.reducer; 