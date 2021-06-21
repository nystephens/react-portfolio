import React from 'react';

function Resume() {
    return (
        <div className="p-3 rounded-border section-bkg">
            <div className="col-sm p-2 text-center">
                <h2>Click to view and download resume:</h2>
            </div>
            <div className="col-sm p-2 text-center">
                <a type="button" href="https://drive.google.com/file/d/1q0QoVbwe5yxVSs-5iG9fUQIMukwrmsd7/view?usp=sharing" target="__blank" rel="noreferrer" className="resume-link btn btn-outline-dark btn-lg">Download</a>
            </div>
            <div className="col-sm p-2 text-center">

                <div className="proficiencies">
                    <h3>Technologies :</h3>
                    <p>HTML, CSS, Javascript, Git, Node.js, REACT, SQL, mySQL, NoSQL, MongoDB, GraphQL, Handlebars, RESTful APIs, jQuery</p>
                    <h3>Professional Skills:</h3>
                    <p>Project Management, Version Control, Time Management, Organization, Troubleshooting, Customer Service, Sales, Contract Development, Engaged Learning, Supervision, Training, Teaching, Mentorship</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;