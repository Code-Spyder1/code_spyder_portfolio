import skills from "../data/skills";

function Skills() {

  return (

    <section id="skills" className="section section-dark">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map(skill => (

          <div className="skill-card" key={skill.title}>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;