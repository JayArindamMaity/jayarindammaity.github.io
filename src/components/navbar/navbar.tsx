import "./navbar.css";
import { House, Award, AppWindow, BookA, Gamepad2, Pizza } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-main">
          <div className="nav-items">
            <ul>
              <li>
                <a href="/">
                  <span className="tooltip" data-tooltip="Home">
                    <House />
                  </span>
                </a>
              </li>
              <li>
                <a href="/projects">
                  <span className="tooltip" data-tooltip="Projects">
                    <AppWindow />
                  </span>
                </a>
              </li>
              <li>
                <a href="/achievements">
                  <span className="tooltip" data-tooltip="Achievements">
                    <Award />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="tooltip" data-tooltip="Books">
                    <BookA />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="tooltip" data-tooltip="Games">
                    <Gamepad2 />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="tooltip" data-tooltip="Pizza Time">
                    <Pizza />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
