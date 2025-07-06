import "./navbar.css";
import {
  House,
  Award,
  AppWindow,
  BookA,
  Gamepad2,
  Pizza,
  PenBox,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
              <Link to="/blog">
                <span className="tooltip" data-tooltip="My Blog">
                  <PenBox />
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
              <Link to="/recepies">
                <span className="tooltip" data-tooltip="Recepies">
                  <Pizza />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
