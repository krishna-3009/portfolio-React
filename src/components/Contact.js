import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="glass-card reveal">
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
    href="https://www.instagram.com/rajaaaa__30?igsh=Y2dhY3d1cW43NnZ5" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://www.linkedin.com/in/krishnadeo-choudhary-7a6308309?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a 
    href="https://github.com/krishna-3009" 
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

export default Contact
