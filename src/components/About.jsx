import ImageSlider from "./ImageSlider";

function About() {
  return (
    <section id="about" className="section section-dark">

      <div className="about-layout">

        <div className="about-image">
          <ImageSlider />
        </div>

        <div className="about-content">
          <div className="about-card about-text-box">
            <h2>About Me</h2>

            <p>
              I'm a web developer who enjoys creating responsive websites,
              interactive JavaScript projects, and game assets in Blender.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;