import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="py-6 bg-violet-100 mb-6 rounded-xl border-2 border-[#6047EC]">
        <h3 className="text-center text-[#6047EC] font-semibold text-xl">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="p-6 bg-gray-100 rounded-xl">
        <h2 className="font-semibold text-xl">
          Bookmarked Blogs : {bookMarks.length}
        </h2>
        <div className="space-y-4">
          {bookMarks.map((bookMark) => (
            <BookMark key={bookMark.id} bookMark={bookMark} />
          ))}
        </div>
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
