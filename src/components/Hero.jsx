import profile from "../assets/images/Profile.png";
import spiderweb from "../assets/images/SpiderWeb Background.jpg";

function Hero() {
  return (
    <header id="home" className="hero section section-hero">

      <div className="hero-content">

        <div className="profile-image">
          <img
            src={profile}
            alt="Abbie Pacas"
          />
        </div>

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          Abbie Pacas
        </h1>

        <h2 className="typing-text">
          Web Developer
        </h2>

        <p className="hero-description">
          I build responsive websites,
          interactive JavaScript applications,
          and occasionally create
          3D game assets in Blender.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="hero-btn"
          >
            Hire Me
          </a>

        </div>

      </div>

      <div
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${spiderweb})`,
        }}
        aria-hidden="true"
      ></div>

    </header>
  );
}

export default Hero;