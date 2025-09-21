import Clock from "../clock/clock";
import "./sidebar.css";
import Quotes from "../quotes/quotes";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="side-main">
            <div className="side-title">🐦‍🔥 Jay Arindam Maity</div>
            <Quotes />

            <hr className="side-hr" />
            <div className="side-sections">
              <div className="side-title-small">Recommended Sections To Explore</div>
              <ul>
                <li><a href="#projects" className="side-anch">Projects</a></li>
                <li><a href="#learning" className="side-anch">Learning</a></li>
                <li><a href="#entertainment" className="side-anch">Entertainment</a></li>
              </ul>
            </div>

            <div className="side-clock">
                <Clock />
            </div>
        </div>
    </div>
  );
}
