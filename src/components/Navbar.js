import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">Krishna Deo Choudhary</div>

      <i
        className="fas fa-bars menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["home", "projects", "skills", "about", "contact"].map(item => (
          <a
            key={item}
            href={`#${item}`}
            className={`nav-link ${active === item ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;