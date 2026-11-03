const skillGroups = [
  {
    title: "Frontend",
    description: "Building polished, responsive interfaces.",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    description: "Creating server-side apps and web services.",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        logoClass: "skill-logo-invert",
      },
    ],
  },
  {
    title: "Databases & APIs",
    description: "Working with data and connecting applications.",
    skills: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      { name: "REST APIs", label: "API" },
    ],
  },
  {
    title: "Programming",
    description: "Languages for problem-solving and application development.",
    skills: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-intro reveal">
        <p className="skills-eyebrow">What I work with</p>
        <h2>Skills &amp; technologies</h2>
        <p className="skills-description">
          Tools and technologies I use to design, build, and connect web
          experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <article
            className="skill-group reveal"
            key={group.title}
            style={{ transitionDelay: `${groupIndex * 80}ms` }}
          >
            <div className="skill-group-heading">
              <span className="skill-group-index">0{groupIndex + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill.name}>
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt=""
                      aria-hidden="true"
                      className={`skill-logo ${skill.logoClass || ""}`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="skill-api-icon" aria-hidden="true">
                      {skill.label}
                    </span>
                  )}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
