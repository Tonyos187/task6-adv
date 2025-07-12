import BlogList from "../components/BlogList/BlogList";
import RecentBlogsComponent from "../components/RecentBlogsComponent/RecentBlogsComponent";
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
