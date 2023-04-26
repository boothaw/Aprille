import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'
import Wave from 'src/components/Wave/Wave'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <div className="home" id="home">
          <PhotosCell></PhotosCell>
          <Wave></Wave>
          <ArticlesCell></ArticlesCell>
          <Wave></Wave>
        </div>
      </>
    </>
  )
}

export default HomePage
