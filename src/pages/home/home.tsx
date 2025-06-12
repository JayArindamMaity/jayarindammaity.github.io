import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-heading"><h2>Hello!</h2></div>
        <div className="heading-content">
          I'm a curious mind who loves building things — whether it's with code,
          circuits, or even a simple recipe in the kitchen.
          <br /> <br />
          Professionally, I dive into programming with languages like C, C++,
          JavaScript, and Python, along with their ecosystems and frameworks.
          Whether it's creating web apps, tinkering with microcontrollers, or
          solving logic problems, I'm always up for a challenge.
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

        <div className="education">
          <h2 className="education-heading">My Education</h2>
          <div className="education-entry">
            <div className="edu-level">Middle School</div>
            <div className="edu-details">
              <div>St. Mary's School, Chandigarh</div>
              <div className="edu-score">87%</div>
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
            <div className="edu-level">College</div>
            <div className="edu-details">
              <div>
                Chitkara University — B.E. Computer Science & Engineering
              </div>
              <div className="edu-score">7.5 CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
