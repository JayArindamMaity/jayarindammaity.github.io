import React from "react";
import "./mylearning.css";

type Resource = {
  name: string;
  url: string;
};

type LearningItem = {
  topic: string;
  resources: Resource[];
};

interface LearningSectionProps {
  items: LearningItem[];
}

const Mylearning: React.FC<LearningSectionProps> = ({ items }) => {
  return (
    <div className="learning-wrapper">
      <div className="content-heading">What I'm currently learning:</div>
      <div className="learning-grid">
        {items.map((item, idx) => (
          <div className="learning-card" key={idx}>
            <div className="learning-topic-title">🟡 {item.topic}</div>
            <div className="learning-resources-label">📚 Resources:</div>
            <div className="learning-resource-tags">
              {item.resources.map((res, i) => (
                <a
                  className="resource-pill"
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {res.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mylearning;