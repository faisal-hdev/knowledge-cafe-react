import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookMark={handleAddToBookMark}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
