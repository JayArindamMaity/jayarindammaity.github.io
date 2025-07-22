import "./navbar.css";
import {
  House,
  Award,
  AppWindow,
  BookA,
  Gamepad2,
  Pizza,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const themes = [
  { id: "theme-default", color: "#F49939" },
  { id: "theme-forest", color: "#2ecc71" },
  // add more themes here
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const switchTheme = (themeId: string) => {
    document.body.className = ""; // Clear any existing themes
    document.body.classList.add(themeId);
    setOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="nav-main">
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">
                <span className="tooltip" data-tooltip="Home">
                  <House />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="tooltip" data-tooltip="Projects">
                  <AppWindow />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/achievements">
                <span className="tooltip" data-tooltip="Achievements">
                  <Award />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/learning">
                <span className="tooltip" data-tooltip="Learning">
                  <BookA />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/entertainment">
                <span className="tooltip" data-tooltip="Entertainment">
                  <Gamepad2 />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/recipes">
                <span className="tooltip" data-tooltip="Recipes">
                  <Pizza />
                </span>
              </Link>
            </li>
            <li className="theme-toggle">
              <div className="theme-button" onClick={() => setOpen(!open)} />
              {open && (
                <div className="theme-dropdown">
                  {themes.map((theme) => (
                    <div
                      key={theme.id}
                      className="theme-circle"
                      style={{ backgroundColor: theme.color }}
                      onClick={() => switchTheme(theme.id)}
                    />
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
