// import { Outlet, Link } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function App () {
  return (
    <div>
      <section className="content flex flex-col lg:flex-row items-center z-10">
        <div className="w-2/3 lg:w-1/5 lg:mr-20 mb-20 lg:mb-0">
          <Header />
          <Footer />
        </div>

        <div className="w-2/3 lg:w-1/3">
          <Projects />
        </div>

        <div className="project-images w-1/3 z-0">
          <div className="project-spreads">
            <img src="imgs/when-you-say-yes.png" alt="two page magazine spread"></img>
          </div>

          <div className="project-social">
            <img src="imgs/vinyl-revival.png" alt="social media post with text about otherworld wine bar"></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;