import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import projects from "./projects.json";
import photos from "./assets/images/placeholder-350x150.png";

function App() {
  const [projectsList, setSelectedProject] = useState(projects);


  return (
    <section>
      <header>
        <Header/>
      </header>

      <main>
      {projectsList.map((project) => {
        return <Project
        name = {project.name}
        key ={project.name}
        photo={project.photo}
        description={project.description}
        />
      })}
        <About />
        <Resume />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
