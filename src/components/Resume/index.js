import React from 'react';

function Resume() {
    return (
        <div className="p-3 border section-bkg">
            <div className="col-sm p-2 text-center">
                <h2>Click to view and download resume:</h2>
            </div>
            <div className="col-sm p-2 text-center">
                <button type="button" class="btn btn-outline-dark btn-lg">
                    <a href="https://drive.google.com/file/d/14LdRt-a2W0OiMcaTwfJ6tg_jbHd54kw2/view?usp=sharing" target="__blank" rel="noreferrer" className="resume-link">Download</a>
                </button>
            </div>
            <div className="col-sm p-2 text-center">
                <h3>Proficiencies :</h3>
                <div className="proficiencies">
                    <p>HTML, CSS, Javascript, Git, Node.js, REACT, SQL, mySQL, NoSQL, MongoDB, GraphQL, Handlebars, RESTful APIs, jQuery</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;