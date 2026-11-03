import { useEffect, useState } from "react";

const certificates = [
  {
    title: "Generative AI for Computer Vision",
    issuer: "NPTEL",
    period: "Jul – Oct 2026",
    duration: "12-week course",
    file: "/certificates/nptel-generative-ai-certificate.pdf",
    mark: "AI",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    period: "Jan – Apr 2025",
    duration: "12-week course",
    file: "/certificates/nptel-java-certificate.pdf",
    mark: "J",
  },
];

function Certifications() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-intro reveal">
        <p className="certifications-eyebrow">Learning in progress</p>
        <h2>Certifications</h2>
        <p>
          Selected courses that have helped me deepen my knowledge of software
          development and emerging technologies.
        </p>
      </div>

      <div className="certification-grid">
        {certificates.map((certificate, index) => (
          <article
            className="certification-card reveal"
            key={certificate.title}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <button
              className="certificate-preview-button"
              type="button"
              onClick={() => setSelected(certificate)}
              aria-label={`Preview ${certificate.title} certificate`}
            >
              <div className="certificate-card-top">
                <span className="certificate-mark" aria-hidden="true">
                  {certificate.mark}
                </span>
                <span className="certificate-issuer">{certificate.issuer}</span>
                <span className="certificate-open-icon" aria-hidden="true">↗</span>
              </div>
              <div className="certificate-card-body">
                <p className="certificate-label">Course certificate</p>
                <h3>{certificate.title}</h3>
                <div className="certificate-meta">
                  <span>{certificate.period}</span>
                  <span>{certificate.duration}</span>
                </div>
              </div>
              <div className="certificate-card-footer">
                <span>Issued by NPTEL</span>
                <span className="certificate-preview-label">Preview certificate <span aria-hidden="true">→</span></span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="certificate-modal"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <section
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="certificate-modal-header">
              <div>
                <p className="certificate-label">{selected.issuer} certificate</p>
                <h3 id="certificate-modal-title">{selected.title}</h3>
              </div>
              <button
                className="certificate-modal-close"
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close certificate preview"
              >
                ×
              </button>
            </header>
            <iframe
              className="certificate-frame"
              src={selected.file}
              title={`${selected.title} certificate PDF`}
            />
            <footer className="certificate-modal-footer">
              <span>{selected.period} · {selected.duration}</span>
              <a href={selected.file} target="_blank" rel="noreferrer">
                Open full certificate <span aria-hidden="true">↗</span>
              </a>
            </footer>
          </section>
        </div>
      )}
    </section>
  );
}

export default Certifications;
