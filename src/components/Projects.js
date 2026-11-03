import { useState } from "react";

import img1 from "../images/project1.jpeg";
import img2 from "../images/project2.png";
import img3 from "../images/project3.png";

function Projects() {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);

  const projects = [
    {
      title: "Jharkhand Tourism UI",
      desc: "A tourism website showcasing destinations and experiences across Jharkhand.",
      img: img1,
      url: "https://jharkhand-tourisam.vercel.app/",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio design focused on clear presentation and a responsive experience.",
      img: img2,
    },
    {
      title: "E-commerce UI",
      desc: "A shopping interface concept designed to make browsing feel simple and intuitive.",
      img: img3,
    },
  ];

  const next = () => setIndex((current) => (current + 1) % projects.length);
  const prev = () =>
    setIndex((current) => (current - 1 + projects.length) % projects.length);

  const getOffset = (projectIndex) => {
    const relativeIndex = (projectIndex - index + projects.length) % projects.length;
    if (relativeIndex === 0) return 0;
    return relativeIndex === 1 ? 1 : -1;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-header reveal">
        <div className="line" />
        <h2>SOME OF MY LATEST WORK</h2>
        <div className="line" />
      </div>

      <div className="project-showcase reveal reveal-delay-1">
        <div className="project-deck" aria-label="Project carousel">
          {projects.map((project, projectIndex) => {
            const offset = getOffset(projectIndex);
            const isActive = offset === 0;
            return (
              <article
                className={`project-card${isActive ? " is-active" : " is-behind"}`}
                key={project.title}
                role="button"
                tabIndex={0}
                aria-label={`${isActive ? "Current project" : "Rotate project deck"}: ${project.title}. Activate to show the next project.`}
                aria-current={isActive ? "true" : undefined}
                onClick={next}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    next();
                  }
                }}
                style={{
                  "--card-x": `${offset * 76}px`,
                  "--card-y": `${Math.abs(offset) * 12}px`,
                  "--card-rotation": `${offset * -7}deg`,
                  "--card-scale": 1 - Math.abs(offset) * 0.1,
                  zIndex: 3 - Math.abs(offset),
                }}
              >
                <div className="project-card-image">
                  <img src={project.img} alt={`${project.title} preview`} />
                  <span className="project-card-count">
                    {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="project-card-content">
                  <p className="project-card-kicker">Selected project</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  {isActive && (
                    <button
                      className="project-details-btn"
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setModal(project);
                      }}
                    >
                      Project details <span aria-hidden="true">↗</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="project-deck-controls">
          <button className="deck-nav-btn" type="button" onClick={prev} aria-label="Previous project">
            ←
          </button>
          <div className="deck-indicator" aria-live="polite">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="deck-indicator-line" />
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
          <button className="deck-nav-btn" type="button" onClick={next} aria-label="Next project">
            →
          </button>
          <span className="deck-hint">Click the card to see the next project</span>
        </div>
      </div>

      {modal && (
        <div className="project-modal" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(null)} aria-label="Close project details">
              ✕
            </button>
            <img src={modal.img} alt={`${modal.title} preview`} />
            <h2>{modal.title}</h2>
            <p>{modal.desc}</p>
            {modal.url && (
              <a className="project-link" href={modal.url} target="_blank" rel="noreferrer">
                View live website
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
