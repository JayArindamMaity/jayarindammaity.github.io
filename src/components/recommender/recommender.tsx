import { useState } from "react";
import "./recommender.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { songs_to_recommend } from "../../data/entertainment";

export default function Recommender() {
  const choices: string[] = ["songs", "movie", "games", "anime"];
  const [index, setIndex] = useState<number>(0);

  const prev = () => {
    setIndex((i) => (i - 1 + choices.length) % choices.length);
  };
  const next = () => {
    setIndex((i) => (i + 1) % choices.length);
  };

  const recommended_obj = ( d_type:string) => {
    if (d_type == "songs") {
      const req_index =  Math.floor(Math.random() * songs_to_recommend.length);
      
    }
  }

  return (
    <>
      <div className="recommender-main">
        <div className="recommender-ask">
          <div className="recommender-ques">
            What would you like recommendation for:
          </div>
          <div className="recommder-choice">
            <button onClick={prev} className="rec-button">
              <FaCaretLeft />
            </button>
            {choices[index]}
            <button onClick={next} className="rec-button">
              <FaCaretRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}