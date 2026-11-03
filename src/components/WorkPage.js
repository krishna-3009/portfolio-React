import img1 from "../images/project1.jpeg";
import img2 from "../images/project2.png";
import img3 from "../images/project3.png";

const projects = [
  {
    title: "Jharkhand Tourism",
    category: "Travel & Tourism",
    description:
      "A tourism website showcasing the destinations, culture, and experiences of Jharkhand.",
    image: img1,
    url: "https://jharkhand-tourisam.vercel.app/",
    action: "Visit live website",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "A personal portfolio concept focused on presenting creative work with clarity.",
    image: img2,
  },
  {
    title: "E-commerce UI",
    category: "UI Design",
    description:
      "A shopping interface concept designed for a simple, intuitive browsing experience.",
    image: img3,
  },
];

function WorkPage() {
  return (
    <main className="work-page">
      <header className="work-page-header">
        <a className="work-back-link" href="/" aria-label="Back to home">
          <span aria-hidden="true">←</span> Home
        </a>
        <p className="work-eyebrow">Selected projects</p>
        <h1>My Work<span>.</span></h1>
        <p className="work-intro">
          A selection of websites and interface concepts I’ve worked on.
        </p>
      </header>

      <section className="work-grid" aria-label="All projects">
        {projects.map((project, index) => (
          <article className="work-card" key={project.title}>
            <div className="work-card-image-wrap">
              <img src={project.image} alt={`${project.title} preview`} />
              <span className="work-card-number">0{index + 1}</span>
            </div>
            <div className="work-card-content">
              <p className="work-card-category">{project.category}</p>
              <h2>{project.title}</h2>
              <p className="work-card-description">{project.description}</p>
              {project.url && (
                <a
                  className="work-card-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.action} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default WorkPage;
