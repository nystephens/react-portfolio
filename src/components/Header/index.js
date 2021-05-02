import React from 'react';
import Navigation from '../Navigation';


function Header() {
    return (
        <div className="page-header">
            <div className="col-sm p-3">
                <h1>Nate Stephens</h1>
            </div>
            <div className="col-sm p-3">
                <Navigation />
            </div>
        </div>
    )
}

export default Header;