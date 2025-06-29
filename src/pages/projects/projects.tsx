import "./projects.css";
import Gitrepos from "../../components/gitrepos/gitrepos";
import { git_links } from "../../data/projects";

export default function Projects() {
  return (
    <>
      <div className="p-main">
        <div className="p-intro">
          <div className="p-heading">About My Projects</div>
          <div className="p-content">
            This is my projects page where you can see some of the weird projects and things I make, these projects may vary across
            different technical domains because I got carried away by my curiosity T_T
            <br /> <br />I hope you like my projects...
          </div>
        </div>

        <div className="p-gitlinks">
          <div className="p-heading">My Git Repos</div>
          <div className="p-content">
            These are some of my Git repositories. These may consist of scripts and tools that allow you to achieve some cool functionality...
            <br /><br /> These projects may be CLI (Command Line Interface) based or just config files and might not contain actual GUI (Graphic User Interface)...
            none the less, these are still some of the cool things that I built that you can enjoy...
            <br /><br />Don't forget to check them out 😄
            <Gitrepos  repos={git_links} />
            
          </div>
        </div>
      </div>
    </>
  );
}