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
            <br /> you might also find some weird things here but you will soon take a liking to it (I guess)...
          </div>
        </div>

        <div className="wall">
          <div className="e-heading">My Fav Wallpapers XD</div>
          <div className="wall-cont">These are some of my favourite wallpapers that I use often cause I think they are really cool XD
            <br /> <br /> Although I don't know the name of actual creators, cause I found them in random places... but these are really good quality ones and I hope you enjoy them... 
            <br /> <br />If you find their creator show them my gratitude as well 😊...
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
      </div>
    </>
  );
}
