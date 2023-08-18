import { routes, Link } from '@redwoodjs/router'

const AboutCopy = () => {
  return (
    <div className="copy-section">
      <div className="copy-section__inner">
        <img
          loading="lazy"
          className="headshot"
          src="https://cdn.filestackcontent.com/resize=height:400/n6BgW3YxTzi9cLyQMmhp"
          alt="Aprille"
        />
        <p>
          <span className="navy bold">Aprille Zammit</span> can often be found
          in her studio, covered in ink working on her next creative project. A
          graphic designer and DIY screen printer who chose to follow her
          passion and devote much more time to this craft.
        </p>
        <Link className="learn-more" to={routes.about()}>
          Say Hello
        </Link>
      </div>
    </div>
  )
}

export default AboutCopy
