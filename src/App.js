import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <body>
      <header>
        <Header/>
      </header>

      <main>
        <Project />
        <About />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
