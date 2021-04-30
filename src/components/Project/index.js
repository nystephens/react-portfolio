import React from 'react';

function Project(props) {
    // console.log(projectsArr[0].photo);

    return(
        <div>
            <a href={ props.url } target="_blank">{props.name}</a>
            <img src={ props.photo } alt="project-pic"></img>
            <p className="project-desc">{ props.description }</p>
        </div>
    )
}

export default Project;
