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
            <div className="side-clock">
                <Clock />
            </div>
        </div>
    </div>
  );
}
