import BlogList from "../components/BlogList/BlogList/BlogList";
import RecentBlogsComponent from "../components/BlogList/RecentBlogsComponent/RecentBlogsComponent";
import Hero from "../components/Hero/Hero";

const Blog: React.FC = () => {
  return (
    <>
      <Hero />
      <RecentBlogsComponent />
      <BlogList />
    </>
  );
};

export default Blog;
