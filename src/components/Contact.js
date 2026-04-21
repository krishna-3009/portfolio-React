import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="glass-card">
        <h2>CONTACT ME</h2>

        <div className="contact-info">
          <p>
            <FaPhone />
            <a href="tel:+918340482585"> +91 8340482585</a>
          </p>

          <p>
            <FaEnvelope />
            <span>
              <a href="mailto:krishnadeochoudhary080@gmail.com">
                krishnadeochoudhary080@gmail.com
              </a>
            </span>
          </p>
        </div>

        <div className="social-links">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;