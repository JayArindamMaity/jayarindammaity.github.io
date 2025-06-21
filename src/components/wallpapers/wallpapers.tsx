import React, { useState } from 'react';
import './wallpapers.css';

interface WallpaperCardProps {
  title: string;
  imageUrl: string;       // e.g., "/wallpapers/nature.jpg"
  downloadName?: string;
}

const WallpaperEng: React.FC<WallpaperCardProps> = ({ title, imageUrl, downloadName }) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className="wallpaper-card">
        <img
          src={imageUrl}
          alt={title}
          className="wallpaper-image"
          onClick={() => setPreviewOpen(true)}
        />
        <div className="wallpaper-content">
          <a
            href={imageUrl}
            download={downloadName || 'wallpaper'}
            className="download-button"
          >
          <h3 className="wallpaper-title">{title}</h3>
          </a>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="modal-overlay" onClick={() => setPreviewOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={imageUrl} alt={title} className="modal-image" />
            <button onClick={() => setPreviewOpen(false)} className="close-button">×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WallpaperEng;