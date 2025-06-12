import './App.css'
import Navbar from './components/navbar/navbar'
import Achievements from './pages/achievements/achievements'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path='/portfolio/achievements' element={<Achievements />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App