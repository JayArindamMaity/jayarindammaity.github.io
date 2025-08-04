import "./entertainment.css";
import WallpaperEng from "../../components/wallpapers/wallpapers";
import { wallpapers } from "../../data/wallpapers";
import Recommender from "../../components/recommender/recommender";

export default function Entertainment() {
  return (
    <>
      <div className="e-main">
        <div className="e-opening">
          <div className="e-heading">Welcome to entertainment section...</div>
          <div className="e-content">
            These are some things that you may find entertaining or cool...
            <br /> you might also find some weird things here but you will soon
            take a liking to it (I guess)...
          </div>
        </div>

        <div className="e-suggest">
          <div className="e-heading">My Personal Suggestor</div>
          <div className="e-content">
            What you see below is a recommender engine that suggests you random
            movie, anime, or song...
            <Recommender />
          </div>
        </div>

        <div className="e-fav-anime">
          <div className="e-heading">
            My top favourite Anime as of Now ranked:
          </div>
          <div className="e-content">
            For those who know me it won't be a suprise that all of the top 5
            picks are production of studio Ghibli.
            <br />
            You might have to take my word on this one but the works of studio
            Ghibli especially the ones that are mentioned here is something
            else. From production to story to everything, it's just perfect...
            <br />
            Besides that you can also enjoy other anime and shows that I have
            listed below (I'm sure you won't regret doing so) 😊
            <br /><br />Here is the list I promised XD:
          </div>
          <div className="e-content">
            <ul>
              <li>Spirited Away</li>
              <li>Howl's Moving Castle</li>
              <li>Princess Mononoke</li>
              <li>Kiki's Delivery Service</li>
              <li>My Neighbour Totoro</li>
              <li>Your Name</li>
              <li>Suzume</li>
              <li>Blade of The Immortal</li>
              <li>Sakamoto Days</li>
              <li>Kaiju No. 8</li>
              <li>Attack On titan</li>
              <li>Juijitsu Kaisen</li>
              <li>One Punch Man</li>
              <li>Demon Slayer</li>
            </ul>
          </div>
        </div>

        <div className="wall">
          <div className="e-heading">My Fav Wallpapers XD</div>
          <div className="e-content">
            These are some of my favourite wallpapers that I use often cause I
            think they are really cool XD
            <br /> <br /> Although I don't know the name of actual creators,
            cause I found them in random places... but these are really good
            quality ones and I hope you enjoy them...
            <br /> <br />
            If you find their creator show them my gratitude as well 😊...
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
