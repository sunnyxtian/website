import { Outlet, Link } from 'react-router-dom';

import '../App.css';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import About from '../components/About';

function App () {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <Projects />
      <About />
    </div>
  )
}

export default App;