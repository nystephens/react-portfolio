import React from 'react';
import aboutImage from '../../assets/images/professional-photo.png';
import '../../App.css';

function About() {
    return (
        <section className="my-5 text-center rounded-border p-3 section-bkg">
            <div className="col-sm p-3">
                <h1 id='about'>About Me</h1>
            </div>
            <div className="col-sm p-3">
                <img src={aboutImage} className="about-image image-border" style={{ width: "100%" }} alt="cover" />
            </div>
            <div className="col-sm p-3">
                <p className="about-text">I'm a developer with several interests who enjoys tackling the full stack.  I focus on creating simple, intuitive, and dynamic applications.  I enjoy solving problems while creating something great from scratch.  I have graduated from the UCLA Extension FSF Coding Bootcamp with a 96% and have a BBA in Music Business (Production Emphasis) from Belmont University in Nashville, TN.  
                <br></br><br></br>
                I hope to use my web dev talents to find a job within the digital side of the music business.  For a long time I have worked in various positions within live music and entertainment, but since the recent pandemic had forced live performances to mostly online platforms I decided to take on a completely new career path.  I am excited to get started on this new chapter in my life and I thank you for your support! ~ Nate</p>
            </div>
        </section>
    );
}

export default About;