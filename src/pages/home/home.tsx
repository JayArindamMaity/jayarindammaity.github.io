import "./home.css";
import { learning_data } from "../../data/learning";
import Contact from "../../components/contact/contact";
import Mylearning from "../../components/mylearning/mylearning";
import GameOfLife from "../../components/gameoflife/gameoflife";

export default function Home() {

  return (
    <>
      <div className="home-main">

        <div className="home-top-section" id="game-of-life">
          {/* The Text Overlay */}
          <div className="hero-text-overlay">
            <h1>
              The Code Smith's <br />
              <span className="highlight">Forge</span>
            </h1>
          </div>

          <GameOfLife />

        </div>

        <div className="first-content-heading" id="introduction">Who Am I?</div>
        <div className="home-content">
          I'm Jay Aridndam Maity a curious mind who loves building things —
          whether it's with code, circuits, or even a simple recipe in the
          kitchen...
          <br /> <br />
          Professionally, I dive into programming with languages like C, C++,
          JavaScript, and Python, along with their ecosystems and frameworks.
          Whether it's creating web apps, tinkering with microcontrollers, or
          solving logic problems, I'm always up for a challenge...
          <br /> <br />
          When I'm not coding, you might find me:
          <ul>
            <li>Cooking something new 🍳</li>
            <li>
              Deep into a League of Legends match or exploring other games 🎮
            </li>
            <li>Reading a book or building an electronic gadget 📚🔧</li>
            <li>
              Or just helping someone out — because I believe a little help goes
              a long way 🤝
            </li>
          </ul>
        </div>

        <div className="why-this" id="why-this-website">
          <div className="content-heading">
            Why This Website?
          </div>
          <div className="home-content">
            Few of you may question why this website was made in the first place...
            <br /> There is just so much stuff that might not be of use to anyone...
            Although that is true, I made this website to share little things I own and enjoy...
            This website will have tons of things that you can give a try (who knows you might end up liking them) XD.
            <br />But if you still have more questions you can still reach out to me with that form below 😊...
          </div>
        </div>

        <div className="education" id="my-education">
          <div className="content-heading">My Education 🎓</div>
          <div className="education-entry">
            <div className="edu-level">College</div>
            <div className="edu-details">
              <div>
                Chitkara University — B.E. Computer Science & Engineering
              </div>
              <div className="edu-score">7.9 CGPA</div>
            </div>
          </div>
          <div className="education-entry">
            <div className="edu-level">High School</div>
            <div className="edu-details">
              <div>Govt. Model Sr. Sec. School, Chandigarh</div>
              <div className="edu-score">85%</div>
            </div>
          </div>
          <div className="education-entry">
            <div className="edu-level">Middle School</div>
            <div className="edu-details">
              <div>St. Mary's School, Chandigarh</div>
              <div className="edu-score">87%</div>
            </div>
          </div>
        </div>

        <Mylearning items={learning_data} />

        <div className="my-working" id="what-i-am-doing">
          <div className="content-heading">What I'm doing:</div>
          <div className="home-content">
            If you are curious about what i'm doing <br /> here it is (P.S.
            don't worry I wont bore you with details XD):
            <ul>
              <li>Writing tech blogs 👨‍💻</li>
              <li>My college degree 🎓</li>
              <li>DSA problems 📚</li>
              <li>My website </li>
              <li>Vim config files T_T </li>
            </ul>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
