import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        // react-bootstrap navbar
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#project-1">Project 1</Nav.Link>
                <Nav.Link href="#project-2">Project 2</Nav.Link>
                <Nav.Link href="#project-3">Project 3</Nav.Link>
                <Nav.Link href="#project-4">Project 4</Nav.Link>
            </Nav>
        </Navbar>

        // regular bootstrap nav
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div className="navbar-nav">
        //             <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        //             <a className="nav-item nav-link" href="#">Features</a>
        //             <a className="nav-item nav-link" href="#">Pricing</a>
        //             <a className="nav-item nav-link disabled" href="#">Disabled</a>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navigation;