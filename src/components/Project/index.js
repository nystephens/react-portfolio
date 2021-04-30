import React from 'react';

function Project() {
    const projectsArr = [
        {
            name: "Project 1",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
            url: "project-1.github.com",
            photo: "../../assets/images/placeholder-350x150.png"
        },
        {
            name: "Project 2",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
            url: "project-2.github.com",
            photo: "../../assets/images/placeholder-350x150.png"
        },
        {
            name: "Project 3",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
            url: "project-2.github.com",
            photo: "../../assets/images/placeholder-350x150.png"
        },
        {
            name: "Project 4",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
            url: "project-3.github.com",
            photo: "../../assets/images/placeholder-350x150.png"
        }
    ]

    console.log(projectsArr[0].photo);

    return(
        <div>
            <a href="https://placeholder.com">Project 1</a>
            <img src={ projectsArr[0].photo } alt="project-pic"></img>
        </div>
    )
}

export default Project;
