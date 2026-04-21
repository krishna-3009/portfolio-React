import { useState } from "react";

import img1 from "../images/project1.jpeg"; // rename properly (no spaces)
import img2 from "../images/project2.png";
import img3 from "../images/project3.png";

function Projects() {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);

  const projects = [
    {
      title: "Jharkhand Tourism UI",
      desc: "Modern tourism UI design.",
      img: img1,
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio design.",
      img: img2,
    },
    {
      title: "E-commerce UI",
      desc: "Shopping website interface.",
      img: img3,
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects" id="projects">

      {/* HEADER */}
      <div className="projects-header">
        <div className="line"></div>
        <h2>SOME OF MY LATEST WORK</h2>
        <div className="line"></div>
      </div>

      <div className="slider-container">

        {/* PREV BUTTON */}
        <button className="nav-btn prev" onClick={prev}>
          &#10094;
        </button>

        <div className="projects-slider">
          <div
            className="project-card active"
            onClick={() => setModal(projects[index])}
          >
            <img src={projects[index].img} alt="" />
            <h3>{projects[index].title}</h3>
            <p>{projects[index].desc}</p>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button className="nav-btn next" onClick={next}>
          &#10095;
        </button>
      </div>

      {/* MODAL */}
     {modal && (
  <div className="project-modal" onClick={() => setModal(null)}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}  // prevents closing when clicking inside
    >
      <button className="close-btn" onClick={() => setModal(null)}>
        ✕
      </button>

      <img src={modal.img} alt="" />
      <h2>{modal.title}</h2>
      <p>{modal.desc}</p>
    </div>
  </div>
)}
    </section>
  );
}

export default Projects;