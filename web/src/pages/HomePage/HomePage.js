import { useEffect, useRef } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'
import Wave from 'src/components/Wave/Wave'

const HomePage = () => {
  const workshops = useRef(null)

  // console.log('hp ref111')

  const scrollTo = () => {
    // const workshops = document.getElementById('workshops')
    const url = window.location.href

    if (url.includes('#workshop')) {
      workshops.current.scrollIntoView()
      // workshops.scrollIntoView()
      console.log(workshops.current, 'fuclk')
    }
  }

  // third try
  useEffect(() => {
    scrollTo()
  }, [])

  // const onLoad = () => {
  //   const url = window.location.href
  //   console.log('should be scrolling', ref.current)

  //   if (url.includes('#workshop')) {
  //     ref.current.scrollIntoView()
  //   }
  // }
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
          <div ref={workshops} id="workshops">
            workshops
          </div>
          {/* <div id="workshops">workshops</div> */}
        </div>
      </>
    </>
  )
}

export default HomePage
