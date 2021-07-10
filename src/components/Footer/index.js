import React from 'react'

function Footer() {
    return (
        <div className="col-sm p-3">
            <footer className="page-footer text-center">
                <div className="row p-2">
                    <h3 className='footer-message'>Lets make it happen!</h3>
                </div>
                <div className="row p-2">
                    <p>© Copyright Nathan Stephens 2021</p>
                </div>
                <div className="col-sm p-3 text-center">
                    <a href="https://github.com/nystephens" className="github-link btn btn-outline-dark btn-lg" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;