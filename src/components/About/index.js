import React from 'react';
import coverImage from '../../assets/images/placeholder-350x150.png';
import '../../App.css';

function About() {
    return (
        <section className="my-5 text-center">
            <div className="col-sm p-3">
                <h1 id='about'>Who am I?</h1>
            </div>
            <div className="col-sm p-3">
                <img src={coverImage} className="about-image" style={{ width: "100%" }} alt="cover" />
            </div>
            <div className="col-sm p-3">
                <p className="about-text">jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
            </div>
        </section>
    );
}

export default About;