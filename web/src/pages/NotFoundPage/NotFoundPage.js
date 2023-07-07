import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Wave from 'src/components/Wave/Wave'

const NotFoundPage = () => (
  <>
    {' '}
    <MetaTags title="Page Not Found" description="Look Elsewhere" />
    <div className="not-found-page">
      <section>
        <Wave title="404 Page Not Found"></Wave>
        <Link className="learn-more" to={routes.home()}>
          Back To Portfolio
        </Link>
      </section>
    </div>
  </>
)

export default NotFoundPage
