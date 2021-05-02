import React from 'react';

function Resume() {
    return (
        <div className="p-3 border bg-light">
            <div className="col-sm p-2 text-center">
                <h2>Resume</h2>
            </div>
            <div className="col-sm p-2 text-center">
                <a href="https://docs.google.com/document/d/1VmoQcL21HcdgNjY2l7KlKnAVgzOTGFCVhHBPnAOBmjw/edit?usp=sharing" target="__blank" className="resume-link">Download</a>
            </div>
            <div className="col-sm p-2 text-center">
                <h3>Proficiencies :</h3>
                <ul className="proficiencies">
                    <li className="list-el p-1">Javascript</li>
                    <li className="list-el p-1">HTML</li>
                    <li className="list-el p-1">CSS</li>
                    <li className="list-el p-1">Git</li>
                    <li className="list-el p-1">SQL</li>
                    <li className="list-el p-1">NoSQL</li>
                    <li className="list-el p-1">React</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;