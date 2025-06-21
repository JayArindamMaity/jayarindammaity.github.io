import "./entertainment.css";
import WallpaperEng from "../../components/wallpapers/wallpapers";
import { wallpapers } from "../../data/wallpapers";

export default function Entertainment() {
  return (
    <>
      <div className="e-main">
        
        <div className="e-opening">
          <div className="e-heading">Welcome to entertainment section...</div>
          <div className="eh-content">
            These are some things that you may find entertaining or cool...
          </div>
        </div>
        
        <div className="wall-grid">
          {wallpapers.map((wallpaper, index) => (
            <WallpaperEng
              key={index}
              title={wallpaper.title}
              imageUrl={wallpaper.imageUrl}
              downloadName={wallpaper.downloadName}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}
