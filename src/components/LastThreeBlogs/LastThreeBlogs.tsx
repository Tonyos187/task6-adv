import React from "react";
import { useSelector } from "react-redux";
import { selectLastThreePosts } from "../../redux/blogSlices/lastThreeBlogs";
import Card from "../Card/Card";

const LastThreePosts: React.FC = () => {
  const lastThreePosts = useSelector(selectLastThreePosts);

  // Access individual cards by index
  const firstCard = lastThreePosts[0];
  const secondCard = lastThreePosts[1];
  const thirdCard = lastThreePosts[2];

  return (
    <section className="my-62 lg:px-162 md:px-112 px-32">
      <h2 className="text-mainText text-2xl font-semibold mb-8">
        Recent blog posts
      </h2>
      <div className="w-full flex flex-wrap justify-between items-center gap-y-[48px]">
        {/* First Card */}
        {firstCard && (
          <Card
            type="list"
            className="lg:w-[31.5789%] md:w-[48.9610%] w-full"
            blog={firstCard}
          />
        )}

        {/* Second Card */}
        {secondCard && (
          <Card
            type="list"
            className="lg:w-[31.5789%] md:w-[48.9610%] w-full"
            blog={secondCard}
          />
        )}

        {/* Third Card */}
        {thirdCard && (
          <Card
            type="list"
            className="lg:w-[31.5789%] w-full"
            blog={thirdCard}
          />
        )}
      </div>
    </section>
  );
};

export default LastThreePosts;
