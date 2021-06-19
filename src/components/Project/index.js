import React from 'react';

function Project(props) {
    return (
        <div className="p-3 project">
            <div className="col-sm p-3 text-center">
                <a className="project-link project-photo" href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
            </div>
            <div className="col-sm p-3 text-center">
                <img className="project-image" src={props.photo} alt="project-pic"></img>
            </div>
            <div className="col-sm p-3 text-center">
                <p className="project-desc">{props.description}</p>
            </div>
            <div className="col-sm p-3 text-center">
                <a href={props.github} className="resume-link btn btn-outline-dark btn-lg" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>
    )
}

export default Project;
