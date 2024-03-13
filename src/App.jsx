import "./App.css";
import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import BookMarks from "./components/BookMarks/BookMarks";

function App() {
  const [bookMarks, setBookMarts] = useState([]);
  const [readingTime, SetReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarts(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    SetReadingTime(newReadingTime);
    const remainingBookMarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarts(remainingBookMarks);
  };

  return (
    <>
      <Header />
      <div className="max-w-[1280px] mx-auto max-sm:py-4 max-sm:px-3 md:flex gap-6">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <BookMarks readingTime={readingTime} bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
