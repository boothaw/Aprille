import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <div className="home" id="home">
          <PhotosCell></PhotosCell>
          <img
            className="wave-svg"
            src="/wave-cropped.svg"
            alt="wave divider"
            id="projects"
          />
          <ArticlesCell></ArticlesCell>
        </div>
      </>
    </>
  )
}

export default HomePage
