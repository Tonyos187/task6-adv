import { useSelector } from "react-redux";
import { selectRecentBlogs } from "../../../redux/blogSlices/recentBlogs";
import type { Blog } from "../../../redux/blogSlices/paginateAllSlices";
import Card from "../../Card/Card";

const RecentBlogsComponent: React.FC = () => {
  const recentBlogs = useSelector(selectRecentBlogs) as Blog[];
  return (
    <div className="my-62 md:my-30 lg:px-162 md:px-112 px-32 flex w-full flex-col">
      <h2 className="text-mainText">Recent Blogs</h2>
      <div className="flex flex-col">
        <div className="w-full flex justify-between">
          <div className="w-[40%]">
            {recentBlogs[0] && <Card blog={recentBlogs[0]} />}
          </div>
          <div className="flex flex-col gap-2 w-[40%]">
            {recentBlogs[1] && <Card blog={recentBlogs[1]} />}
            {recentBlogs[2] && <Card blog={recentBlogs[2]} />}
          </div>
        </div>
        <div className="w-full">{recentBlogs[3] && <Card blog={recentBlogs[3]} />}</div>
      </div>
    </div>
  );
};

export default RecentBlogsComponent;
