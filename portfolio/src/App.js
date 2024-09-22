import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App () {
  return (
    <div className="d-flex align-items-stretch">
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;