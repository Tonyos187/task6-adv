import LastThreePosts from "../components/LastThreeBlogs/LastThreeBlogs";
import StoriesInterviews from "../components/StoriesInterviews/StoriesInterviews";

const Newsletter: React.FC = () => {
  return (
    <>
      <StoriesInterviews />
      <LastThreePosts />
    </>
  );
};

export default Newsletter;
