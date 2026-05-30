import './App.css'
import profile from "./assets/profile.jpeg";
function App() {
  return (
    <div>
<nav className="navbar">
  <h2>Samruddhi</h2>

  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#certificates">Certificates</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>


      {/* Hero Section */}
      <section className="hero">
         <img src={profile} alt="Samruddhi" className="profile-img" />
        <h1>Samruddhi Jain Nandgaonkar</h1>
        <h3>B.Tech IT Student | Web Developer</h3>

        <p>
          Passionate about building responsive web applications and
          continuously learning modern web technologies.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" download>
  <button>Download Resume</button>
</a>
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am a second-year B.Tech Information Technology student at
          G H Raisoni College of Engineering, Nagpur.
          I enjoy creating web applications, learning new technologies,
          and solving real-world problems through software development.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="skills">
        <h2>Tech Stack</h2>

        <h3>Frontend</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>

        <h3>Tools</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Vercel</li>
        </ul>

        <h3>Currently Learning</h3>
        <ul>
          <li>Node.js</li>
          <li>Data analytics</li>
          <li>API integration</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
  <h3>Todo App</h3>

  <p>
    A React-based task management application with add,
    edit and delete functionality.
  </p>

  <p>
    <strong>Tech Stack:</strong> React.js, CSS, JavaScript
  </p>

  <a
    href="https://github.com/samujain01/todo-app.git"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  {" | "}

  <a
    href="https://todo-app-eight-khaki-47.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo
  </a>
</div>


        <div className="project-card">
  <h3>React Calculator</h3>

  <p>
    A responsive calculator built using React with
    modern UI design and real-time calculations.
  </p>

  <p>
    <strong>Tech Stack:</strong> React.js, CSS, JavaScript
  </p>

  <a
    href="https://github.com/samujain01/react-calculator.git"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  {" | "}

  <a
    href="https://react-calculator-neon-tau.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo
  </a>
</div>

        <div className="project-card">
  <h3>Weather App</h3>

  <p>
    Weather forecasting application using API integration
    to display real-time weather information.
  </p>

  <p>
    <strong>Tech Stack:</strong> React.js, API Integration,
    CSS, JavaScript
  </p>

  <a
    href="https://github.com/samujain01/weather-app.git"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  {" | "}

  <a
    href="https://weather-app-beta-green-83.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo
  </a>
</div>

<div className="project-card">
  <h3>Movie Recommendation System</h3>

  <p>
    A web application that recommends movies based on
    user preferences and interests.
  </p>

  <p>
    <strong>Tech Stack:</strong> Python, Machine Learning,
    Data Analysis
  </p>

  <p>Project available on request.</p>
</div>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <h2>Certificates</h2>

        <ul>
          <li>Deloitte Data Analytics Job Simulation (Forage)</li>
          <li>Skyscanner Front-End Developer Job Simulation (Forage)</li>
          <li>CodSoft Internship Certificate</li>
          <li>BE10X AI Tools Workshop</li>
        </ul>
      </section>

      {/* Achievements */}
      <section>
        <h2>Achievements</h2>

        <ul>
          <li>CGPA: 8.6</li>
          <li>Completed Deloitte Data Analytics Job Simulation</li>
          <li>Completed Skyscanner Front-End Developer Job Simulation</li>
          <li>Built and deployed multiple web development projects</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>

        <h3>G H Raisoni College of Engineering, Nagpur</h3>

        <p>
          Bachelor of Technology (B.Tech)
        </p>

        <p>
          Information Technology
        </p>

        <p>
          CGPA: 8.6
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>

        <p>Email: samujain01@gmail.com</p>

        <p>
          LinkedIn:
          https://www.linkedin.com/in/samruddhi-jain01
        </p>

        <p>
          GitHub:
          https://github.com/samujain01
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Samruddhi Jain Nandgaonkar</p>
      </footer>

    </div>
  );
}

export default App;