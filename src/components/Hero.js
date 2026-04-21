

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: "url(../images/Group 8.png)" }}
    >
      <div className="hero-left">
        <h1>Designer</h1>
        <p className="hero-desc">
          UI/UX product designer specialising in <br />
          <span>UI design and design system</span>
        </p>
      </div>

      <div className="hero-right">
        <h1>&lt;coder&gt;</h1>
        <p className="hero-desc">
          Front end developer who writes <br />
          <span>clean and efficient code.</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;