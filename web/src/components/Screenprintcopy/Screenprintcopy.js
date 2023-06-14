import { routes, Link } from '@redwoodjs/router'

const Screenprintcopy = () => {
  return (
    <div className="copy-section">
      <div className="copy-section__inner">
        <p>
          We provide a custom silk-screen printing service in Malta and Gozo for
          artists, illustrators, companies and anyone wanting to print out their
          design using this unique process. We print small runs on art paper,
          cardboard, fabric and wood with eco-friendly inks and much love. We
          are also always open to printing on different materials as long as
          they can absorb the ink and be made to lay flat. The maximum size we
          can print is A2 unless you want a repeat pattern.
        </p>

        <Link className="learn-more" to={routes.screenprinting()}>
          Start Printing
        </Link>
      </div>
    </div>
  )
}

export default Screenprintcopy
