function Projects() {
  return(
    <section>
      <h2 className="text-xl font-semibold">Projects</h2>

      <div class="grid grid-cols-3 gap-4">
        <article>
          <h3 className="text-lg font-semibold">Study Timer</h3>
          <h4 className="">Project management</h4>
          <p className="text-sm">June 2024 - present</p>
          <div className="py-2">
            <img src="imgs/timer.png" alt="screenshot of a timer website interface">
            </img>
          </div>
        </article>
        <article>
          <h3 className="text-lg font-semibold">Husky UXplorers</h3>
          <h4 className="">Web development</h4>
          <p className="text-sm">June 2024 - present</p>
        </article>
      </div>
    </section>
  )
}

export default Projects;