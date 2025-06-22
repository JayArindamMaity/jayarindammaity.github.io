import React, { useState } from "react";
import { FaDownload , FaRegEye } from "react-icons/fa";
import "./wallpapers.css";

interface WallpaperCardProps {
  title: string;
  imageUrl: string;
  downloadName?: string;
}

const WallpaperEng: React.FC<WallpaperCardProps> = ({
  title,
  imageUrl,
  downloadName,
}) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className="wall-list">
        <div className="wall-details">
          <div>{title}</div>
          <div className="wall-buttons-holder">
            <a
              href={imageUrl}
              download={downloadName || "wallpaper"}
              className="wall-button"
            >
              <FaDownload />
            </a>
            <a onClick={() => setPreviewOpen(true)} className="wall-button"><FaRegEye/></a>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="modal-overlay" onClick={() => setPreviewOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt={title} className="modal-image" />
            <button
              onClick={() => setPreviewOpen(false)}
              className="close-button"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WallpaperEng;
