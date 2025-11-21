import Clock from "../clock/clock";
import "./sidebar.css";
import Quotes from "../quotes/quotes";
import { GiMagicAxe } from "react-icons/gi";
import on_this_page from "../../data/page";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  dispflies: boolean;
  onToggleFlies: () => void;
}

export default function Sidebar({
  isOpen,
  onToggleFlies,
}: SidebarProps) {
  const location = useLocation();


  const currentPageName = location.pathname === "/" 
    ? "home" 
    : location.pathname.replace("/", "").toLowerCase();

  const currentPageData = on_this_page.find(
    (item) => item.page === currentPageName
  );

  const toId = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const scrollToSection = (sectionName: string) => {
    const elementId = toId(sectionName);
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Element with id "${elementId}" not found`);
    }
  };

  return (
    <>
      <div className={`sidebar-panel left ${isOpen ? "open" : ""}`}>
        <div className="side-main">
          <div className="side-title">🐦‍🔥 Jay Arindam Maity</div>
          <Quotes />
          <div className="side-sections">
            <div className="side-title-small">
              Recommended Sections To Explore
            </div>
            <ul>
              <li>
                <a href="#projects" className="side-anch">Projects</a>
              </li>
              <li>
                <a href="#learning" className="side-anch">Learning</a>
              </li>
              <li>
                <a href="#entertainment" className="side-anch">Entertainment</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`sidebar-panel right ${isOpen ? "open" : ""}`}>
        <div className="side-main">
          
          <div className="right-side-title-small">
            On This Page
          </div>
          {/* <hr className="side-hr" /> */}

          <div className="side-sections">
            <ul>
              {currentPageData?.sections.map((section, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(section.section_name)}
                    className="button-style"
                  >
                    {section.section_name}
                  </button>
                </li>
              ))}
              
              {!currentPageData && (
                <li className="text-sm opacity-50">No specific sections found.</li>
              )}
            </ul>
          </div>

          <div className="side-clock">
            <Clock />
            <button onClick={onToggleFlies} className="firefly-toggle">
              <GiMagicAxe />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}