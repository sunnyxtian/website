function Sidebar() {
  return (
    <section className="sidebar">
      <div>
        <h1 className="text-2xl font-semibold">SUNNY TIAN</h1>
        <p className="font-semibold">designer and developer</p>
      </div>

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

export default Sidebar;