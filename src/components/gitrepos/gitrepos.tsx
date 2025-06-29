import type React from "react";
import { FaGithub } from "react-icons/fa6";
import "./gitrepos.css";

interface GitRepo {
  reponame: string;
  repolink: string;
  repodesc: string;
}

interface GitreposProps {
  repos: GitRepo[];
}

const Gitrepos: React.FC<GitreposProps> = ({ repos }) => {
  return (
    <>
      {repos.map((repo, index) => (
        <div className="repo-main" key={index}>
          <div className="repo-name">
            <a href={repo.repolink} target="blank" className="repo-button">
              {repo.reponame}
            </a>
          </div>
          <div className="repo-desc">{repo.repodesc}</div>
        </div>
      ))}
    </>
  );
};

export default Gitrepos;
