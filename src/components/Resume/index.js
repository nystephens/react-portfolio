import React from 'react';

function Resume() {
    return (
        <div className="p-3 border-4 section-bkg">
            <div className="col-sm p-2 text-center">
                <h2>Click to view and download resume:</h2>
            </div>
            <div className="col-sm p-2 text-center">
                    <a type="button" href="https://drive.google.com/file/d/14LdRt-a2W0OiMcaTwfJ6tg_jbHd54kw2/view?usp=sharing" target="__blank" rel="noreferrer" className="resume-link btn btn-outline-dark btn-lg">Download</a>
            </div>
            <div className="col-sm p-2 text-center">
                <h3>Proficiencies :</h3>
                <div className="proficiencies">
                    <ul>
                        <li className="list-el">HTML</li>
                        <li className="list-el">CSS</li>
                        <li className="list-el">Javascript</li>
                        <li className="list-el">Git</li>
                        <li className="list-el">Node.js</li>
                        <li className="list-el">Express</li>
                        <li className="list-el">REACT</li>
                        <li className="list-el">SQL</li>
                        <li className="list-el">mySQL</li>
                        <li className="list-el">NoSQL</li>
                        <li className="list-el">MongoDB</li>
                        <li className="list-el">GraphQL</li>
                        <li className="list-el">Handlebars</li>
                        <li className="list-el">RESTful APIs</li>
                        <li className="list-el">jQuery</li>
                    </ul>
                    {/* <p>HTML, CSS, Javascript, Git, Node.js, REACT, SQL, mySQL, NoSQL, MongoDB, GraphQL, Handlebars, RESTful APIs, jQuery</p> */}
                </div>
            </div>
        </div>
    )
}

export default Resume;