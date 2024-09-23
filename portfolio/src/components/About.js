function About () {
  return(
    <section className="about">
      <h2>About</h2>
      <div>
        <p>
          I'm a junior in Informatics at the University of Washington.

          I'm interested in the ways coding and design intersect, from creating
          generative designs in Processing to improving developer and designer
          communication.
        </p>
      </div>
      <h3 className="text-lg font-semibold">Find me at</h3>
      <div className="text-sm flex">
        <div>
          <p><a href="mailto:sunnytia@uw.edu">Sunnytia@uw.edu</a></p>
        </div>
        <div>
          <p><a href="https://www.linkedin.com/in/sunnyxtian/" target="_blank">LinkedIn</a></p>
        </div>
        <div>
          <p><a href="https://www.github.com/sunnyxtian/" target="_blank">Github</a></p>
        </div>
        <div>
          <p>
            No rights reserved. <a href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank">CCO 1.0</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;