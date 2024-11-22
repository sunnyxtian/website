// import { Outlet, Link } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function App () {
  return (
    <div className="flex-row">
      <div className="flex-col">
        <Header />
        <Footer />
      </div>
      <div className="flex-col">
        <Projects />
      </div>
    </div>
  )
}

export default App;