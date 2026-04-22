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
  <a 
    href="https://www.instagram.com/krishnadeo_choudhary" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://www.linkedin.com/in/krishnadeo-choudhary" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a 
    href="https://www.github.com/krishna-3009" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
</div>
      </div>
    </section>
  );
}

export default Contact;