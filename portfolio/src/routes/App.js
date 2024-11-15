// import { Outlet, Link } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';

function App () {
  return (
    <div className="flex flex-col">
      <Header />
      {/* <Projects /> */}
      {/* <About /> */}
    </div>
  )
}

export default App;