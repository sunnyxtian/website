// import { Outlet, Link } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function App () {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-2/3 lg:w-1/3 lg:mr-20 mb-20 lg:mb-0">
        <Header />
        <Footer />
      </div>
      <div className="w-2/3 lg:w-1/3">
        <Projects />
      </div>
    </div>
  )
}

export default App;