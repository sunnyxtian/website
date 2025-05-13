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

// code format from https://ryanyan.ca/
const colors = ["#C3F335", "#99DAD1", "#FA5B33"];
const text = ["*", "✧", "✩", "+"];

let lastParticle = 0;
const particleInterval = 150;

document.addEventListener("mousemove", (e) => {
  const currTime = Date.now();

  if(currTime - lastParticle >= particleInterval) {
    const particle = document.createElement('div');
    particle.classList.add('mouse-effects');
    document.body.appendChild(particle);

    let x = e.clientX;
    let y = e.clientY;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const colorIndex = Math.floor(Math.random() * 3);
    const textIndex = Math.floor(Math.random() * (text.length));
    const randomColor = colors[colorIndex];
    particle.textContent = text[textIndex];

    particle.style.color = randomColor;

    // timeout
    setTimeout(() => {
      particle.remove();
    }, 1500);

    lastParticle = currTime;
  }
});

export default App;