import PropTypes from "prop-types";
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    cover_image,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  return (
    <div>
      <img
        className="rounded-2xl"
        src={cover_image}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex flex-col lg:flex-row justify-between mt-8 mb-4">
        <div className="flex gap-6">
          <div>
            <img
              className="w-14 h-14 object-cover rounded-2xl"
              src={author_img}
              alt={`author img of the card`}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl">Author : {author}</h3>
            <h3 className="text-gray-500 font-medium">{posted_date}</h3>
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 text-[20px] font-medium flex items-center gap-2">
            {reading_time} min read
            <button onClick={() => handleAddToBookMark(blog)}>
              <MdOutlineBookmarks className="w-6 h-6 hover:text-[#735ee6] duration-200" />
            </button>
          </h3>
        </div>
      </div>
      <h3
        style={{ lineHeight: "52px" }}
        className="text-black text-xl md:text-[25]  lg:text-[35px] my-4 font-bold"
      >
        {title}
      </h3>
      <p className="mt-4 mb-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="ml-3 text-lg text-gray-500 font-normal" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-[#6047EC] hover:text-[#735ee6] hover:border-black duration-200 font-semibold text-xl hover:border-b-2"
      >
        Mark as read
      </button>
      <hr className="mb-10 mt-8" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
