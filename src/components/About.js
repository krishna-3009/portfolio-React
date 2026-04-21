import img1 from "../images/profile.png";
import resume from "../images/resume.pdf";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <span className="line"></span>
        <h2>ABOUT ME</h2>
        <span className="line"></span>
      </div>

      <div className="about-content">
        {/* TEXT */}
        <div className="about-text">
          <h3>Hello, I'm a B.Tech Student 👋</h3>
          <p>
            I am passionate about frontend development and UI/UX design. I enjoy
            building clean, modern, and user-friendly websites using technologies
            like React, JavaScript, and CSS.
          </p>
          <p>
            I focus on writing clean code, creating responsive designs, and
            continuously improving my skills to build better digital experiences.
          </p>

          <a href={resume} download>
            <button className="about-btn">Download Resume</button>
          </a>
        </div>

        {/* IMAGE */}
        <div className="about-img">
          <img src={img1} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;