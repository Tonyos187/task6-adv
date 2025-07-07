import React from "react";
import { Link } from "react-router-dom";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";

interface CardProps {
  blog: Blog;
}

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <div className={`bg-bg`}>
      <p className="mb-1 text-sm text-date">{blog.date}</p>
      <Link
        to={`/blog/${blog.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="max-w-[200px] mb-2 rounded"
        />
        <h3 className="text-mainText font-bold">{blog.title}</h3>
        <p className="mb-1 text-secText">{blog.mainDescription}</p>
        <p className="text-sm text-secText">
          Categories: {blog.categories.join(", ")}
        </p>
      </Link>
    </div>
  );
};

export default Card;
