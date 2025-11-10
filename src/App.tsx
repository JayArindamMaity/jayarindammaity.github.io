import "./App.css";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Blogs from "./pages/blogs/blogs";
import Recipes from "./pages/recipes/recipes";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Learning from "./pages/learning/learning";
import Projects from "./pages/projects/projects";
import Sidebar from "./components/sidebar/sidebar";
import RecipeDetail from "./pages/recipes/detail/detail";
import Fireflies from "./components/fireflies/fireflies";
import Achievements from "./pages/achievements/achievements";
import Entertainment from "./pages/entertainment/entertainment";

function App() {
  const [isSidebarOpen , setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      
      <Fireflies spawnRate={20} />

      <Sidebar isOpen={isSidebarOpen} />

      <div className="page-container">
      <Navbar onToggleSidebar={toggleSidebar}/>      
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/recipes/:name" element={<RecipeDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;