import { useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell'
import PrintsCell from 'src/components/PrintsCell/PrintsCell.js'
import Screenprintcopy from 'src/components/Screenprintcopy/Screenprintcopy'
import Wave from 'src/components/Wave/Wave'
import Workshops from 'src/components/Workshops/Workshops'

const HomePage = () => {
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
          {/* <PhotosCell></PhotosCell> */}
          {/* <div className="placeholder"></div> */}
          <Wave subtitle="screenprinting"></Wave>
          <Screenprintcopy></Screenprintcopy>
          <PrintsCell></PrintsCell>
          {/* <div className="placeholder"></div> */}
          <Wave subtitle="workshops"></Wave>
          <Workshops></Workshops>
          {/* <PrintsCell></PrintsCell> */}
          {/* <div className="placeholder">
            <Link className="learn-more" to={routes.workshops()}>
              See More
            </Link>
          </div> */}
          <Wave subtitle="projects"></Wave>
          {/* <div className="placeholder"></div> */}
          {/* <ArticlesCell></ArticlesCell> */}
        </div>
      </>
    </>
  )
}

export default HomePage
