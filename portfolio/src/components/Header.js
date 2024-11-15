function Sidebar() {
  return (
    <div>
      <section className="header flex flex-row">
        <section className="intro">
          <h1>Sunny Tian</h1>
          <p className="">ux designer who likes to code</p>
        </section>

        <section className="projects">
          <div>
            <p>Coming Soon</p>
            <p className="blurb">UX Design + Development</p>
          </div>

          <div>
            <p><a href="https://www.musemediauw.com/">Muse Website</a></p>
            <p className="blurb">Wordpress Development</p>
          </div>

          <div>
            <p><a href="https://www.musictour.sunnytian.com/">Music Tour</a></p>
            <p className="blurb">Web Development</p>
          </div>

          <div>
            <p><a href="https://www.instagram.com/huskymathclub">Husky Math Club</a></p>
            <p className="blurb">Social Media Design</p>
          </div>

          <div className="footer">
            <p><a href="https://www.linkedin.com/in/sunnyxtian">Linkedin</a></p>
            <p><a href="https://read.cv/suni">ReadCV</a></p>
            <p><a href="mailto:sunnytianxin@gmail.com">Email</a></p>
          </div>
        </section>

        {/* <div className="links text-right">
          <div>
            <p><a href="mailto:sunnytianxin@gmail.com" rel="noreferrer">email &#8599;</a></p>
          </div>
          <div>
            <p><a href="https://www.linkedin.com/in/sunnyxtian/" target="_blank" rel="noreferrer">
              linkedin &#8599;
            </a></p>
          </div>
          <div>
            <p><a href="https://www.github.com/sunnyxtian/" target="_blank" rel="noreferrer">
              github &#8599;
            </a></p>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default Sidebar;