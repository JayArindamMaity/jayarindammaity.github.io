import { useEffect, useState } from "react";
import "./recommender.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { songs, games, movies, anime } from "../../data/entertainment";
import type { Recommendations } from "../../data/types";

export default function Recommender() {
  const choices: string[] = ["songs", "movie", "games", "anime"];
  const [index, setIndex] = useState<number>(0);
  const [presentRecommendations, setPresentRecommendations] = useState<
    Recommendations[]
  >([]);

  useEffect(() => {
    setPresentRecommendations(recommended_obj("songs"));
  }, []);

  const next = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % choices.length;
      setPresentRecommendations(recommended_obj(choices[newIndex]));
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + choices.length) % choices.length;
      setPresentRecommendations(recommended_obj(choices[newIndex]));
      return newIndex;
    });
  };

  const recommended_obj = (d_type: string): Recommendations[] => {
    const pool =
      d_type === "songs"
        ? songs
        : d_type === "anime"
        ? anime
        : d_type === "movie"
        ? movies
        : d_type === "games"
        ? games
        : [];

    const uniqueIndexes = new Set<number>();
    while (uniqueIndexes.size < 3 && pool.length > uniqueIndexes.size) {
      uniqueIndexes.add(Math.floor(Math.random() * pool.length));
    }

    return Array.from(uniqueIndexes).map((i) => pool[i]);
  };

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

        <button
          className="recommend-button"
          onClick={() =>
            setPresentRecommendations(recommended_obj(choices[index]))
          }
        >
          Recommend
        </button>

        <hr className="hori-rule" />

        <div className="rec-grid">
          {presentRecommendations.map((item, idx) => (
            <article key={idx} className="rec-card">
              {"songname" in item && (
                <>
                  <h3 className="rec-title">{item.songname}</h3>
                  <p className="rec-meta">Artist: {item.artist}</p>
                  <a href={item.spotify} target="_blank" className="rec-link">
                    Listen on Spotify
                  </a>
                </>
              )}

              {"aniname" in item && (
                <>
                  <h3 className="rec-title">{item.aniname}</h3>
                  <p className="rec-meta">Studio: {item.studio}</p>
                  <a href={item.watchlink} target="_blank" className="rec-link">
                    Watch here
                  </a>
                </>
              )}

              {"movie" in item && (
                <>
                  <h3 className="rec-title">{item.movie}</h3>
                  <p className="rec-meta">Director: {item.director}</p>
                  <a href={item.watchlink} target="_blank" className="rec-link">
                    Watch here
                  </a>
                </>
              )}

              {"game" in item && (
                <>
                  <h3 className="rec-title">{item.game}</h3>
                  <p className="rec-meta">Studio: {item.studio}</p>
                  <p className="rec-meta">Platform: {item.platform}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
