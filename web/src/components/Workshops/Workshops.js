import { Link, routes } from '@redwoodjs/router'

const Workshops = () => {
  return (
    <div className="workshops-section">
      <div className="workshops-inner">
        <p>
          <span className="bold navy">Our Beginner Workshop</span> is perfect
          for someone who wants to experience the magic of screen printing for
          the first time. It will be a fun day of learning the basic steps of
          screen printing while getting messy and creative.
        </p>
        <p>
          After a brief introduction to the history and various techniques
          available, we will go over the general process of preparing a screen,
          how to artwork your designs, creating your screen, and finally pulling
          your own design.
        </p>
        <p>
          You will walk away with your own original screen-printed design as
          well as the knowledge of the hands-on process.
        </p>
        <p>
          All the equipment and materials will be provided, including 8 sheets
          of A4 white paper to print your design on.
        </p>
        <p>
          The workshop will be very intimate as the workshop is limited to 4
          people per session, allowing for a lot of one-to-one help.
        </p>
        <p className="bold navy">What you will need to bring:</p>
        <p>
          An idea for your design or a design ready-created. This will allow for
          more printing time. The design needs to be made up of a solid colour,
          with no gradients or shading.
        </p>
        <p>Snacks, coffee and tea will be available :)</p>
        <p>The workshop will take place at my studio in Fgura.</p>
        <p className="bold">Let’s get our hands messy and create! </p>
        <p className="bold navy">Terms and conditions:</p>
        <p>
          ~ please bring your own original artwork. We do not stand for stealing
          anyone’s creations.
        </p>
        <p>
          ~ you have 10 days to cancel your workshop from the date of booking.
          Failure to do so will not guarantee a full refund.
        </p>
        <Link to={routes.workshops()}>See More</Link>
      </div>
    </div>
  )
}

export default Workshops
