import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1280px] mx-auto max-sm:py-4 max-sm:px-3 md:flex gap-6">
        <Blogs />
        <BookMarks />
      </div>
    </>
  );
}

export default App;
