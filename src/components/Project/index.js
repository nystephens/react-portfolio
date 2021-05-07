import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    return (
        <div className="p-3">
            <div className="col-sm p-3 text-center">
                <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
            </div>
            <div className="col-sm p-3 text-center">
                <img src={props.photo} alt="project-pic"></img>
            </div>
            <div className="col-sm p-3 text-center">
                <p className="project-desc">{props.description}</p>
            </div>
        </div>
    )
}

export default Project;
