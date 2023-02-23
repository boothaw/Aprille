import { MetaTags } from '@redwoodjs/web'

import PhotoCell from 'src/components/PhotoCell'
import PhotosCell from 'src/components/PhotosCell'

const PhotoPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Photo -- Title Here" description="Photo Page" />
      <div className="photo-page">
        <PhotoCell id={id}></PhotoCell>
        <img className="wave-svg" src="/wave-cropped.svg" alt="wave divider" />
        <h2>More...</h2>
        <PhotosCell></PhotosCell>
      </div>
    </>
  )
}

export default PhotoPage
