import resume from "../assets/resume/AbbiePacasResume.pdf";
import resumePreview from "../assets/images/AbbiePacasResume.png";

function Resume() {
  return (
    <section id="resume" className="section section-pink">

      <h2>Resume</h2>

      <div className="resume-preview">

        <img
          src={resumePreview}
          alt="Resume Preview"
        />

      </div>

      <a
        href={resume}
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </section>
  );
}

export default Resume;