import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App () {
  return (
    <div className="d-flex align-items-stretch">
      <Intro />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App;