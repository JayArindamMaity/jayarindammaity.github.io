import type React from "react";
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
          <ul>
            <li>
            <a href={repo.repolink} target="blank" className="repo-button">
              {repo.reponame}
            </a>: {repo.repodesc}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Gitrepos;