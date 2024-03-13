import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div>
      <div className="p-4 bg-white rounded-lg mt-5">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object,
};

export default BookMark;
