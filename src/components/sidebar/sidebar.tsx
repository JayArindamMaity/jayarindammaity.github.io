import "./sidebar.css";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="side-main">
            <div className="side-title">Jay Arindam Maity</div>
            <br />The undefeated one in League of Legends XD
        </div>
    </div>
  );
}
