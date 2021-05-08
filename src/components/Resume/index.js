import React from 'react';

function Resume() {
    return (
        <div className="p-3 border bg-light">
            <div className="col-sm p-2 text-center">
                <h2>Resume</h2>
            </div>
            <div className="col-sm p-2 text-center">
                <a href="https://docs.google.com/document/d/1VmoQcL21HcdgNjY2l7KlKnAVgzOTGFCVhHBPnAOBmjw/edit?usp=sharing" target="__blank" rel="noreferrer" className="resume-link">Download</a>
            </div>
            <div className="col-sm p-2 text-center">
                <h3>Proficiencies :</h3>
                <div className="proficiencies">
                    <p>HTML, CSS, Javascript, Git, Node.js, REACT, Data management (SQL, mySQL, NoSQL, MongoDB, GraphQL), Handlebars, RESTful APIs</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;