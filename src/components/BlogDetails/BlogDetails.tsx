import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { Blog } from "../../redux/blogSlices/paginateAllSlices";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogs = useSelector((state: RootState) => state.blog.blogs) as Blog[];
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div>Blog not found.</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{blog.title}</h2>
      <p>
        <b>Date:</b> {blog.date}
      </p>
      <img
        src={blog.mainImage}
        alt={blog.title}
        style={{ maxWidth: "300px" }}
      />
      <p>{blog.mainDescription}</p>
      <h3>Categories: {blog.categories.join(", ")}</h3>
      <div>
        <h4>Sections:</h4>
        {blog.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "1rem" }}>
            <img
              src={section.image}
              alt={`Section ${idx + 1}`}
              style={{ maxWidth: "150px" }}
            />
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
