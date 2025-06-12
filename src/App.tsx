import "./App.css";
import Navbar from "./components/navbar/navbar";
import Achievements from "./pages/achievements/achievements";
import Books from "./pages/books/books";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Games from "./pages/games/games";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Food from "./pages/food/food";

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/books" element={<Books />} />
          <Route path="/games" element={<Games />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;