import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className="navbar-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="nav-item nav-link" to="/">About</Link>
                <Link className="nav-item nav-link" to="/contact">Contact</Link>
                <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-item nav-link" to="/resume">Resume</Link>
            </nav>
        </div >
    )
}

export default Navigation;