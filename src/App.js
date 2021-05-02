import React from 'react';

import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="container">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={About} />
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
