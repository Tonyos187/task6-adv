import React from "react";
import { Link } from "react-router-dom";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";
import Arrow from "../../data/arrow";

interface CardProps {
  blog: Blog;
  className?: string;
  type?: string;
}

const getCategoryClass = (category: string) => {
  switch (category.toLowerCase()) {
    case "design":
      return "bg-[#F9F5FF] text-[#6941C6]";
    case "research":
      return "bg-[#EEF4FF] text-[#3538CD]";
    case "presentation":
      return "bg-[#FDF2FA] text-[#C11574]";
    case "frontend":
      return "bg-purple-100 text-purple-800";
    case "javascript":
      return "bg-yellow-200 text-yellow-900";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Card: React.FC<CardProps> = ({ blog, className = "", type }) => {
  return (
    <div
      className={`bg-bg flex ${className} ${
        type === "small"
          ? "flex md:flex-row flex-col justify-between items-center gap-6"
          : "flex-col "
      }
      ${
        type === "big"
          ? "flex lg:flex-row flex-col justify-between items-center gap-6"
          : "flex-col "
      }`}
    >
      <div
        className={`overflow-hidden flex justify-center items-center
          ${type === "small" ? "md:w-[320px] w-full h-[200px]" : ""}
        ${type === "mid" ? "w-[100%] h-[228px] mb-6 lg:mb-8" : "flex-col"}
        ${type === "big" ? "lg:w-[48.6842%] md:w-full h-[228px] " : ""}
        ${type === "list" ? "w-full h-[240px] mb-6 lg:mb-8" : ""}
        `}
      >
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="object-cover block w-full h-auto hover:scale-[1.05] hover:brightness-[1.05] transition duration-[400ms]"
        />
      </div>

      <div
        className={`
          ${type === "small" ? "flex flex-col items-start gap-2 lg:w-[41.8918%] md:w-[55.3246%] w-full h-[200px] " : ""}
        ${type === "mid" ? "flex flex-col items-start w-full" : ""}
        ${type === "big" ? "flex flex-col items-start lg:w-[48.6842%] md:w-full" : ""}
        `}
      >
        <p className="mb-3 text-sm text-date">{blog.date}</p>

        <div className="flex flex-col items-start justify-between w-full">
          <div className="w-full">
            <Link
              to={`/blog/${blog.id}`}
              className="flex items-center gap-[25px] justify-between decoration-0 "
            >
              <h3 className="text-mainText font-bold">{blog.title}</h3>
              <Arrow className="stroke-mainText hover:stroke-secText" />
            </Link>
          </div>
          <p className="text-secText">{blog.mainDescription}</p>
        </div>
        <ul className="flex gap-2 mt-6 flex-wrap">
          {blog.categories.map((cat) => (
            <li
              key={cat}
              className={`py-0.5 px-2.5 rounded-2xl text-sm font-medium ${getCategoryClass(
                cat
              )}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
