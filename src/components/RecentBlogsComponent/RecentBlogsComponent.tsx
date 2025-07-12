import { useSelector } from "react-redux";
import { selectRecentBlogs } from "../../redux/blogSlices/recentBlogs";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";
import Card from "../Card/Card";

const RecentBlogsComponent: React.FC = () => {
  const recentBlogs = useSelector(selectRecentBlogs) as Blog[];
  return (
    <section className="my-62 lg:px-162 md:px-112 px-32 flex w-full flex-col">
      <h2 className="text-mainText font-semibold text-2xl mb-8">Recent blog posts</h2>
      <div className="flex flex-col justify-between items-center">
        <div className="w-full flex lg:flex-row flex-col justify-between md:items-start items-center gap-y-[32px] mb-[60px]">
          <div className="lg:w-[48.6842%] md:w-full">
            {recentBlogs[0] && (
              <Card className="w-full" type="mid" blog={recentBlogs[0]} />
            )}
          </div>
          <div className="flex flex-col justify-between items-start lg:w-[48.6842%] md:w-full gap-y-8">
            <div className="w-full">
              {recentBlogs[1] && <Card className="w-full" type="small" blog={recentBlogs[1]} />}
            </div>
            <div className="w-full">
              {recentBlogs[2] && <Card className="w-full" type="small" blog={recentBlogs[2]} />}
            </div>
          </div>
        </div>
        <div className="w-full">
          {recentBlogs[3] && <Card type="big" blog={recentBlogs[3]} />}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsComponent;
