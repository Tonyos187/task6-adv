import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { setCurrentPage } from "../../redux/blogSlices/paginateAllSlices";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";
import Card from "../Card/Card";
import { LeftArrow, RightArrow } from "../../data/arrow";

const BlogList: React.FC = () => {
  const dispatch = useDispatch();
  const { blogs, currentPage, blogsPerPage } = useSelector(
    (state: RootState) => state.blog
  );

  // Calculate visible blogs
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  // Page numbers
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="my-62 lg:px-162 md:px-112 px-32">
      <h2 className="text-mainText text-2xl font-semibold mb-8">
        All blog posts
      </h2>
      <div className="w-full flex flex-wrap justify-between items-center gap-y-[48px]">
        {currentBlogs.map((blog: Blog) => (
          <Card
            type="list"
            className="lg:w-[31.5789%] md:w-[48.9610%] w-full"
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
      {/* Pagination Buttons */}
      <div className="flex items-center justify-between mt-12.5 flex-col gap-5 md:flex-row">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-secText px-3 py-1 rounded disabled:opacity-50 flex items-center gap-2.5 cursor-pointer disabled:cursor-default"
        >
          <LeftArrow/>
          Previous
        </button>

        <div>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={i + 1 === currentPage}
              className={`disabled:text-[#7F56D9] text-secText w-[40px] h-[40px] cursor-pointer disabled:cursor-default ${
                i + 1 === currentPage ? "" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-secText px-3 py-1 rounded disabled:opacity-50 flex items-center gap-2.5 cursor-pointer disabled:cursor-default"
        >
          Next
          <RightArrow/>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
