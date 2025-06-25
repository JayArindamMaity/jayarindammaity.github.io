import "./App.css";
import Navbar from "./components/navbar/navbar";
import Achievements from "./pages/achievements/achievements";
import Learning from "./pages/learning/learning";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Entertainment from "./pages/entertainment/entertainment";
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
          <Route path="/learning" element={<Learning />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;