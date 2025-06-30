import type React from "react";
import "./yvids.css";

interface YVids {
  vidname: string;
  vidauth: string;
  vidlink: string;
  viddesc: string;
}

interface YVidsProps {
  vids: YVids[];
}

const Yvids: React.FC<YVidsProps> = ({ vids }) => {
  return (
    <>
      {vids.map((vids, index) => (
        <div className="v-main" key={index}>
          <div className="v-head">
            <div className="v-title">{vids.vidname}</div>
              <a href={vids.vidlink} target="blank" className="v-link">
                Watch Here
              </a>
          </div>
          <div className="v-auth">By: {vids.vidauth}</div>
          <div className="v-content">{vids.viddesc}</div>
        </div>
      ))}
    </>
  );
};

export default Yvids;