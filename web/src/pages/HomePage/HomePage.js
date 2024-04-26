import { MetaTags } from '@redwoodjs/web'

import AboutCopy from 'src/components/AboutCopy/AboutCopy'
import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell'
import PrintsCell from 'src/components/PrintsCell/PrintsCell.js'
import Screenprintcopy from 'src/components/Screenprintcopy/Screenprintcopy'
import Wave from 'src/components/Wave/Wave'
import WorkprintsCell from 'src/components/WorkprintsCell'
import Workshops from 'src/components/Workshops/Workshops'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Portfolio"
        description="SCREENPRINTING, PHOTOGRAPHY, ADVENTURE"
      />
      <>
        <div className="home" id="home">
          <a href="/" className="aprille-name">
            <h1>Aprille Zammit ~ Studio</h1>
            <p>Screenprinting, Photography, Adventure</p>
          </a>
          <Wave subtitle="photography"></Wave>
          <PhotosCell filter="12" button="true"></PhotosCell>
          <Wave subtitle="projects"></Wave>
          <ArticlesCell></ArticlesCell>
          <Wave subtitle="screenprinsting"></Wave>
          <Screenprintcopy></Screenprintcopy>
          <PrintsCell filter="12"></PrintsCell>
          <Wave subtitle="workshops"></Wave>
          <Workshops></Workshops>
          <WorkprintsCell filter="12"></WorkprintsCell>

          <Wave subtitle="bio & contact"></Wave>
          <AboutCopy></AboutCopy>
        </div>
      </>
    </>
  )
}

export default HomePage
