import React from 'react';
import aboutImage from '../../assets/images/professional-photo.png';
import '../../App.css';

function About() {
    return (
        <section className="my-5 text-center border p-3 section-bkg">
            <div className="col-sm p-3">
                <h1 id='about'>About Me</h1>
            </div>
            <div className="col-sm p-3">
                <img src={aboutImage} className="about-image" style={{ width: "100%" }} alt="cover" />
            </div>
            <div className="col-sm p-3">
                <p className="about-text">I'm a developer with several interests who enjoys tackling the full stack.  I focus on creating simple, intuitive, and dynamic applications and I enjoy solving problems while creating something great from scratch. I have completed the UCLA Extension Coding Bootcamp (Full Stack Web Development) and I also have a BBA in Music Business (Production Emphasis) from Belmont University in Nashville, TN.  I hope to use my web dev talents to find a job within the digital side of the music business.  For a long time I have worked in various positins within live music, but since the recent pandemic has forced live performances to mostly online platforms I decided to take on a completely new avenue.  I am excited to get started on this new chapter in my life and I thank you for your support! ~ Nate</p>
            </div>
        </section>
    );
}

export default About;