function Projects() {
  function handleHover() {
    // First, format project bios as a JSON.
    // Then, add an image path within the JSON.
    // Populate the list of projects dynamically
      // Can create seperate, projectCard component that takes in the JSON data.
    // This function will take the key or some identifying value
      // then finds the corresponding image to display
  }

  return(
    <div>
      <section className="projects flex flex-col">
        <div className="project-spreads mb-5">
          <h2>Muse Magazine Spreads</h2>
          <p className="blurb">Publication Design</p>
          <p className="tags text-base text-gray font-mono">2025</p>
        </div>

        <div className="project-social mb-5">
          <h2>Muse Social Media</h2>
          <p className="blurb">Social Media Design</p>
          <p className="tags text-base text-gray font-mono">2025</p>
        </div>
      </section>
    </div>
  )
}

export default Projects;