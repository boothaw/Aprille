import { routes, Link } from '@redwoodjs/router'

const AboutCopy = () => {
  return (
    <div className="copy-section">
      <div className="copy-section__inner">
        <img
          loading="lazy"
          className="headshot"
          src="https://res.cloudinary.com/dfpiloj6e/image/upload/h_1200,c_scale,q_auto,f_auto/v1759099532/w6zoacbnlsycjqvlu7ig.jpg"
          alt="Aprille"
        />
        <p>
          <span className="navy bold">Aprille Zammit</span> is a versatile
          creative force, equally content in her studio creating or out at sea
          gathering inspiration. As a multi-hyphenated creative, she dives into
          various mediums to capture the perfect feeling for each project.
          Inspired by the ocean's fluidity, her work reflects a deep connection
          to nature. Aprille's journey is a testament to her boundless
          creativity and passion for bringing emotions to life through art.
        </p>
        <Link className="learn-more" to={routes.about()}>
          Say Hello
        </Link>
      </div>
    </div>
  )
}

export default AboutCopy
