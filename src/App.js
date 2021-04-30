import React, { useState } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import projects from "./projects.json";
import photos from "./assets/images/placeholder-350x150.png";
import Portfolio from './components/Portfolio';

function App() {
    return (
      <Router>
        <div>
        <Header />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route path="/" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
        <Footer />
        </div>
      </Router>
    );

  

  // return (
  //   <section>
  //     <header>
  //       <Header/>
  //     </header>

  //     <main>
  //     {projectsList.map((project) => {
  //       return <Project
  //       name = {project.name}
  //       key ={project.name}
  //       photo={project.photo}
  //       description={project.description}
  //       />
  //     })}
  //       <About />
  //       <Resume />
  //       <Contact />
  //     </main>

  //     <footer>
  //       <Footer />
  //     </footer>
  //   </section>
  // );
}

export default App;
