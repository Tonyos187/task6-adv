import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";
import { selectLastNinePosts } from "../../redux/blogSlices/lastTenPosts";
import Card from "../Card/Card";
import StoriesInterviews from "../StoriesInterviews/StoriesInterviews";

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

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogs = useSelector((state: RootState) => state.blog.blogs) as Blog[];
  const lastNinePosts = useSelector(selectLastNinePosts);
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div>Blog not found.</div>;

  // Filter out the current blog from recent posts
  const filteredRecentPosts = lastNinePosts.filter(post => post.id !== blog.id);

  return (
    <section className="lg:mt-[150px] md:mt-[110px] mt-[92px] lg:px-162 md:px-112 px-32">
      <div className="flex md:justify-between md:flex-row flex-col-reverse w-full gap-y-8">
        {/* Last 10 Posts Section */}
        <div className="mb-16 lg:w-[] md:w-[44.4155%] w-full">
          <h2 className="text-mainText text-2xl font-semibold mb-8">
            Recent blog posts
          </h2>
          <div className="w-full flex flex-wrap justify-between items-center gap-y-8">
            {filteredRecentPosts.map((post) => (
              <Card type="list" className="w-full" key={post.id} blog={post} />
            ))}
          </div>
        </div>

        {/* Blog Details */}
        <div className="lg:w-[] md:w-[53.5064%] w-full flex flex-col gap-8">
          <span className="mb-8 text-[#6941C6] text-sm font-semibold">
            {blog.date}
          </span>
          <h2 className="mb-8 text-mainText text-4xl font-bold">
            {blog.title}
          </h2>
          <img className="w-full" src={blog.mainImage} alt={blog.title} />
          <p className="text-secText">{blog.mainDescription}</p>
          <div className="flex flex-col gap-y-8">
            {blog.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-y-8">
                <img
                  className="w-full"
                  src={section.image}
                  alt={`Section ${idx + 1}`}
                />
                <p className="text-secText">{section.content}</p>
              </div>
            ))}
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
          <div className="hidden lg:block lg:w-full">
            <StoriesInterviews marginTop="mt-18 md:mt-8" />
          </div>
        </div>
      </div>

      <div className="block lg:hidden w-full">
        <StoriesInterviews marginTop="mt-18 md:mt-8" />
      </div>
    </section>
  );
};

export default BlogDetails;
