import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { setCurrentPage } from "../../../redux/blogSlices/paginateAllSlices";
import type { Blog } from "../../../redux/blogSlices/paginateAllSlices";
import Card from '../../Card/Card';

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
    <div className="my-62 md:my-30 lg:px-162 md:px-112 px-32">
      <h2>Blogs (Page {currentPage})</h2>
      {currentBlogs.map((blog: Blog) => (
        <Card key={blog.id} blog={blog} />
      ))}

      {/* Pagination Buttons */}
      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;