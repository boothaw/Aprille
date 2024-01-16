import { MetaTags } from '@redwoodjs/web'

import PhotosCell from 'src/components/PhotosCell'
import Wave from 'src/components/Wave/Wave'

const PhotographyPage = () => {
  return (
    <>
      <>
        <MetaTags title="Photography" description="My Photography" />
        <Wave title="Photography"></Wave>
        <div className="photo-page">
          <PhotosCell filter="-1"></PhotosCell>
        </div>
      </>
    </>
  )
}

export default PhotographyPage
