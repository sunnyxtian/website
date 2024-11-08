function Projects() {
  return(
    <div>
      <section className="projects">
        <h2 className="">Projects</h2>
        <div class="">
          <article className="project-card">
            {/* <img src="imgs/timer.png" alt="screenshot of pomodoro timer interface"></img> */}
            <h3 className="font-semibold">Study Timer</h3>
            <div className="tags">
              <p>Project Management</p>
            </div>
          </article>
          <article className="project-card">
            {/* <img src="imgs/husky_uxplorers.png" alt="screenshot of purple themed website">
            </img> */}
            <h3 className="font-semibold">Husky UXplorers</h3>
            <div className="tags">
              <p>Front-End Development</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Projects;