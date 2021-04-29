import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <body>
      <header>
        <Navigation />
        <Header/>
      </header>

      <main>
        <Project />
      </main>

      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
