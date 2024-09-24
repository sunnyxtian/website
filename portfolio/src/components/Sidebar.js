function Sidebar() {
  return (
    <section className="sidebar flex flex-row">
      <div>
        <h1>SUNNY TIAN</h1>
        <p className="font-semibold">designer and developer</p>
      </div>

      <div className="links text-right">
        <div>
          <p><a href="mailto:sunnytia@uw.edu">Sunnytia@uw.edu &#8599;</a></p>
        </div>
        <div>
          <p><a href="https://www.linkedin.com/in/sunnyxtian/" target="_blank">LinkedIn &#8599;</a></p>
        </div>
        <div>
          <p><a href="https://www.github.com/sunnyxtian/" target="_blank">Github &#8599;</a></p>
        </div>
      </div>
    </section>
  )
}

export default Sidebar;