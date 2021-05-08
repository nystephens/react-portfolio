import React, { useState }from 'react';
import Project from "../Project";
import projectData from "../../projectData.json";

function Portfolio() {

    const [projectsList, setSelectedProject] = useState(projectData);

    return (
        <div className="col-sm p-3 text-center border bg-light">
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
        </div>
    )
}

export default Portfolio;
