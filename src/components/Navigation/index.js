import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className="col-sm">
            <div className="navbar-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="col-sm text-center">
                        <Link className="nav-item nav-link" to="/">About</Link>
                    </div>
                    <div className="col-sm text-center">
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    </div>
                    <div className="col-sm text-center">
                        <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                    </div>
                    <div className="col-sm text-center">
                        <Link className="nav-item nav-link" to="/resume">Resume</Link>
                    </div>
                </nav>
            </div >
        </div>
    )
}

export default Navigation;