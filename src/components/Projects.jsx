import { useState } from "react";
import projects from "../data/projects";

function Projects() {
    const [category, setCategory] = useState("web");

    const filteredProjects = projects.filter((project) => {
        return project.category === category;
    });

    return (
        <section id="projects" className="section section-dark">
            <h2>Projects</h2>
            <div className="project-tabs">

                <button onClick={() => setCategory("web")}>Web Design</button>
                <button onClick={() => setCategory("javascript")}>Fun JavaScript</button>
                <button onClick={() => setCategory("models")}>3D Models</button>

            </div>

            <div className="project-grid">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id ?? project.title}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;