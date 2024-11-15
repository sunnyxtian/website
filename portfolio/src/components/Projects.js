function Projects() {
  return(
    <div>
      <section className="projects">
        <h2 className="">Projects</h2>
        <div class="">
          <article className="project-card">
            <img src="imgs/timer.png" alt="screenshot of pomodoro timer interface"></img>
            <h3 className="">Study Timer</h3>
            <div className="tags">
              <p>Project Management</p>
            </div>
          </article>
          <article className="project-card">
            <img src="imgs/muse.png" alt="screenshot of muse website">
            </img>
            <h3 className="">Muse Website</h3>
            <div className="tags">
              <p>Web Development</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Projects;