import { MetaTags } from '@redwoodjs/web'

import PhotoCell from 'src/components/PhotoCell'
import PhotosCell from 'src/components/PhotosCell'
import Wave from 'src/components/Wave/Wave'

const PhotoPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Photo -- Title Here" description="Photo Page" />
      <div className="photo-page">
        <PhotoCell id={id}></PhotoCell>
        <Wave></Wave>
        <h2 className="additional-work-title">More...</h2>
        <PhotosCell exclude={id}></PhotosCell>
      </div>
    </>
  )
}

export default PhotoPage
