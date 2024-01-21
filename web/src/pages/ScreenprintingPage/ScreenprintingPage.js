import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PrintsCell from 'src/components/PrintsCell/PrintsCell.js'
import Wave from 'src/components/Wave/Wave'

const ScreenprintingPage = () => {
  return (
    <>
      <MetaTags
        title="Screenprinting"
        description="Custom silk-screen printing service in Malta and Gozo for artists, illustrators, companies and anyone wanting to print out their design using this unique process"
      />

      <div className="copy-section">
        <Wave title="screenprinting"></Wave>
        <div className="copy-section__inner">
          {/* <h1>Screenprinting</h1> */}
          <p>
            We provide a custom silk-screen printing service in Malta and Gozo
            for artists, illustrators, companies and anyone wanting to print out
            their design using this unique process. We print small runs on art
            paper, cardboard, fabric and wood with eco-friendly inks and much
            love. We are also always open to printing on different materials as
            long as they can absorb the ink and be made to lay flat. The maximum
            size we can print is A2 unless you want a repeat pattern.
          </p>
          <p className="bold navy">Why we love screen printing</p>
          <p>
            There are many fun things about screen printing! Celebrating a craft
            that is hands-on is a lovely addition to the predominantly digital
            landscape we find ourselves in nowadays. It allows us to create
            something tactile where the feeling of the ink will enable you to
            connect with the medium. The types of inks that we use are
            water-based and eco-friendly while still keeping a vibrant pigment
            that gives the opportunity to play with opacities and marbling
            effects. The ink is durable and resistant to regular washing on
            textile prints. Each print is unique due to the hand-pulling process
            – all of the right ingredients to bring your unique designs to life!
          </p>
          <p className="bold navy">Artwork</p>
          <p>
            If you need help with your creation, we offer a design service (from
            commissioned artwork to tidying up files) and you can enquire about
            that here. For those who have their artwork ready, please note the
            below:
          </p>
          <p>~ Artwork must be supplied at 100% scale</p>
          <p>~ The resolution must be at least 300dpi</p>
          <p>~ The print area should be 100% black </p>
          <p>
            ~ Matching colours between screens and prints is a tricky business
            and this also depends on the material that you want to print on. We
            will always discuss this with you and match it to the best of our
            abilities.{' '}
          </p>
          <p>
            Please read the{' '}
            <Link className="learn-more" to={routes.termsAndConditions()}>
              Terms & Conditions
            </Link>
            .
          </p>
        </div>
        <Wave subtitle="Work"></Wave>
      </div>
      <PrintsCell fitler="-1"></PrintsCell>
    </>
  )
}

export default ScreenprintingPage
