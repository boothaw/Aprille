import { useEffect, useState } from 'react'

import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'
import Wave from 'src/components/Wave/Wave'

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
          {/* <PhotosCell></PhotosCell> */}
          <Wave></Wave>
          <div id="screenprints">screenprints</div>
          <Wave></Wave>
          <div id="workshops">workshops</div>
          <Wave></Wave>
          {/* <ArticlesCell></ArticlesCell> */}
        </div>
      </>
    </>
  )
}

export default HomePage
