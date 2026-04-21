import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      desc: "Builds the structure of web pages using semantic elements.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      desc: "Styles websites with layouts, colors, and responsive design.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      desc: "Adds interactivity and dynamic behavior to web applications.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      desc: "Builds modern UI using components and efficient state management.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      desc: "Used for problem-solving, scripting, and backend development.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      desc: "Object-oriented language used for backend and application development.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="line"></span>
        <h2>SKILLS</h2>
        <span className="line"></span>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;