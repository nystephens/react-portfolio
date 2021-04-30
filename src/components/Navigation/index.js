import React from 'react';
import '../../App.css';


function Navigation() {
    return (
        // regular bootstrap nav
        <div className="navbar-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Contact</a>
                <a className="nav-item nav-link" href="#">Project 1 <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Project 2</a>
                <a className="nav-item nav-link" href="#">Project 3</a>
                <a className="nav-item nav-link" href="#">Project 4</a>
            </nav>
        </div>

    )
}

export default Navigation;