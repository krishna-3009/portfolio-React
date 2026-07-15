import img2 from "../images/Group 8.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content reveal reveal-left">
        <p className="hero-eyebrow">Hello, I’m</p>

        <h1>
          KRISHNADEO 
          CHOUDHARY<span>.</span>
        </h1>

        <p className="hero-role">
          UI/UX Designer & <br />
          Front-End Developer
        </p>

        <p className="hero-desc">
          I design thoughtful digital experiences and turn them into clean,
          responsive interfaces.
        </p>
<div className="hero-actions">
          <a className="primary-btn" href="#portfolio">
            View My Work
          </a>
          <a className="secondary-btn" href="#contact">
            Contact Me
          </a>
        </div>
        
      </div>

      <div className="hero-image-wrap reveal reveal-right">
        <div className="hero-accent" />
        <img
          className="hero-image"
           src={img2} 
          alt="KRISHNADEO CHOUDHARY"
        />
      </div>
    </section>
  );
}

export default Hero;
