import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
