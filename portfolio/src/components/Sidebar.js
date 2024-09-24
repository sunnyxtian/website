function Sidebar() {
  return (
    <div>
      <section className="sidebar flex flex-row">
        <div>
          <h1>SUNNY TIAN</h1>
          <p className="font-semibold">designer and developer</p>
        </div>

        <div className="links text-right">
          <div>
            <p><a href="mailto:sunnytia@uw.edu" rel="noreferrer">Sunnytia@uw.edu &#8599;</a></p>
          </div>
          <div>
            <p><a href="https://www.linkedin.com/in/sunnyxtian/" target="_blank" rel="noreferrer">
              LinkedIn &#8599;
            </a></p>
          </div>
          <div>
            <p><a href="https://www.github.com/sunnyxtian/" target="_blank" rel="noreferrer">
              Github &#8599;
            </a></p>
          </div>
        </div>
      </section>

      <hr></hr>
    </div>
  )
}

export default Sidebar;