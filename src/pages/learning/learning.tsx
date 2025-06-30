import "./learning.css";
import Yvids from "../../components/yvids/yvide";
import { youtube_learn_vids } from "../../data/learn";

export default function Learning() {
  return (
    <>
      <div className="l-main">
        <div className="l-intro">
          <div className="l-heading">Learning Section...</div>
          <div className="l-content">
            Welcome to the learning section of my website...
            <br /> <br />
            This is where I shall share the resources and stuff that you as well
            can use to learn new things...
            <br />
            Most of these things will be realated to computer science and might
            be very boring to many of you. But if you keep perusing you might
            find something of interest...
            <br />
            This may include some really useaful git repositories, video links,
            books, articles and more...
            <br /> <br /> HAPPY LEARNING!!! 😁
          </div>
        </div>

        <div className="l-y-vids">
          <div className="l-heading">
            Some Good Youtube Videos to Learn From
          </div>
          <div className="l-content">
            These are some of the youtube videos and playlists that I would
            recommed to anyone who would like to learn programming
            <br />
            <br />
            If you really enjoy it you can share them with others and share your
            misery... (I mean joy) T_T
          </div>
          <div className="l-vid-holder">
            <Yvids vids={youtube_learn_vids} />
          </div>
        </div>
      </div>
    </>
  );
}
