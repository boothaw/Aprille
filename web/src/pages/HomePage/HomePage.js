import { useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AboutCopy from 'src/components/AboutCopy/AboutCopy'
import ArticlesCell from 'src/components/ArticlesCell'
import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import PhotosCell from 'src/components/PhotosCell'
import PrintsCell from 'src/components/PrintsCell/PrintsCell.js'
import Screenprintcopy from 'src/components/Screenprintcopy/Screenprintcopy'
import Wave from 'src/components/Wave/Wave'
import WorkprintsCell from 'src/components/WorkprintsCell'
import Workshops from 'src/components/Workshops/Workshops'

const HomePage = () => {
  console.log('DB', process.env.DATABASE_URL)
  console.log('secret 2', process.env.REDWOOD_ENV_SESSION_SECRET)

  const [element, setElement] = useState(null)

  let location = useLocation()

  useEffect(() => {
    let hash = location.hash

    const removeHashCharacter = (str) => {
      const result = str.slice(1)
      return result
    }

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash))
      setElement(element)
      return element
    } else {
      return null
    }
  }, [])

  useEffect(() => {
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }, [element])

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <div className="home" id="home">
          <a href="/" className="aprille-name">
            <h1>Aprille Zammit ~ Studio</h1>
            <p>Screenprinting, Photography, Adventure</p>
          </a>
          <Wave subtitle="photography"></Wave>
          {/* <PhotosCell filter="12" button="true"></PhotosCell> */}
          <PhotosCell filter="12" button="true"></PhotosCell>
          <Wave subtitle="screenprinting"></Wave>
          <Screenprintcopy></Screenprintcopy>

          <PrintsCell filter="12"></PrintsCell>
          <Wave subtitle="workshops"></Wave>
          <Workshops></Workshops>
          <WorkprintsCell filter="12"></WorkprintsCell>
          {/* <div className="placeholder">
            <Link className="learn-more" to={routes.workshops()}>
              See More
            </Link>
          </div> */}
          <Wave subtitle="projects"></Wave>
          <ArticlesCell></ArticlesCell>
          <Wave subtitle="bio & contact"></Wave>
          <AboutCopy></AboutCopy>
        </div>
      </>
    </>
  )
}

export default HomePage
