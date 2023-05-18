import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'
import Scrollhash from 'src/components/Scrollhash/Scrollhash'
import Wave from 'src/components/Wave/Wave'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <div className="home" id="home">
          <a href="/" className="aprille-name">
            <h1>Aprille Zammit ~ Studio</h1>
            <p>Screenprinting, Photography, Adventure</p>
          </a>
          <PhotosCell></PhotosCell>
          <Wave></Wave>
          <ArticlesCell></ArticlesCell>
          <Wave></Wave>
          <div id="screenprints">screenprints</div>
          <Wave></Wave>
          <div id="workshops">workshops</div>
          <Scrollhash />
        </div>
      </>
    </>
  )
}

export default HomePage
