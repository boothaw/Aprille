import { MetaTags } from '@redwoodjs/web'

import Wave from 'src/components/Wave/Wave'

const NotFoundPage = () => (
  <>
    {' '}
    <MetaTags title="Page Not Found" description="Look Elsewhere" />
    <div className="not-found-page">
      <section>
        <Wave title="404 Page Not Found"></Wave>
      </section>
    </div>
  </>
)

export default NotFoundPage
