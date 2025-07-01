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

        <div className="l-cplats">
          <div className="l-heading">
            Some really good coding platforms to practice your coding skills
          </div>
          <div className="l-content">
            If you are a developer or a student you might already know these
            platforms. For my non-developer friends these platforms have
            questions that aim at testing and improving your knowledge regarding
            programming and algorithms. Something you too can try and master 😊
            <br />
            <br /> Here are some of the coding platforms that I would recommend:
            <ul>
              <li>
                <a href="https://codeforces.com/" className="l-button">Codeforces</a>: Generally Good, and you will have to
                code everything acc. to given problem
              </li>
              <li>
                <a href="https://leetcode.com/" className="l-button">Leetcode</a>: Another generally good option but you
                only have to write the main function
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/problem-of-the-day" className="l-button">GeeksForGeeks</a>: This is also a nice platform for
                general practice
              </li>
              <li>
                <a href="https://www.hackerrank.com/" className="l-button">Hackerrank</a>: This is a recommended platform if you
                are a begineer and are learning to code
              </li>
              <li>
                <a href="https://atcoder.jp/" className="l-button">AtCoder</a>: This is Japan based platform known for
                high quality questions
              </li>
              <li>
                <a href="https://projecteuler.net/" className="l-button">ProjectEuler</a>: This is another good platform that
                might be intimidating to begineers
              </li>
              <li>
                <a href="https://www.codechef.com/" className="l-button">Codechef</a>: I would recommend the old practice page
              </li>
            </ul>
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
