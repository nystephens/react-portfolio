import React, { useState }from 'react';
import Project from "../Project";
import projectData from "../../projectData.json";

function Portfolio() {

    const [projectsList, setSelectedProject] = useState(projectData);

    return (
        <section className="col-sm p-3 text-center rounded-border section-bkg">
            <div>
                <h3 className="col-sm p-3 text-center" >Click on the project title to see the deployed application!</h3>
            </div>
            {projectsList.map((project) => {
                return <Project
                    name={project.name}
                    key={project.name}
                    photo={project.photo}
                    description={project.description}
                    url={project.url}
                    github={project.github}
                />
            })}
        </section>
    )
}

export default Portfolio;
