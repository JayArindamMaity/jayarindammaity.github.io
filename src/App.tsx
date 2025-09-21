import "./App.css";
import Navbar from "./components/navbar/navbar";
import Achievements from "./pages/achievements/achievements";
import Learning from "./pages/learning/learning";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Entertainment from "./pages/entertainment/entertainment";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes/recipes";
import Footer from "./components/footer/footer";
import RecipeDetail from "./pages/recipes/detail/detail";
import Blogs from "./pages/blogs/blogs";
import Sidebar from "./components/sidebar/sidebar";
import { useState } from "react";
import Fireflies from "./components/fireflies/fireflies";

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
