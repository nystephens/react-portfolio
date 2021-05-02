import React, { useState }from 'react';
import Project from "../Project";
import projects from "../../projects.json";
import photo from "../../assets/images/placeholder-350x150.png"

function Portfolio() {

    const [projectsList, setSelectedProject] = useState(projects);

    return (
        <div className="col-sm p-3 text-center border bg-light">
            {projectsList.map((project) => {
                return <Project
                    name={project.name}
                    key={project.name}
                    photo={photo}
                    description={project.description}
                />
            })}
        </div>
    )
}

export default Portfolio;
