import { MetaTags } from '@redwoodjs/web'

import PhotoCell from 'src/components/PhotoCell'
import PhotosCell from 'src/components/PhotosCell'
import Wave from 'src/components/Wave/Wave'

const PhotoPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Photography" description="Photography Page" />
      <div className="photo-page">
        <PhotoCell id={id}></PhotoCell>
        <Wave title="More Like This"></Wave>
        <PhotosCell exclude={id}></PhotosCell>
      </div>
    </>
  )
}

export default PhotoPage
