import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import PhotosCell from 'src/components/PhotosCell/PhotosCell.js'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <PhotosCell></PhotosCell>
        <img className="wave-div" src="/wave.svg" alt="wave divider" />
        <ArticlesCell></ArticlesCell>
      </>
    </>
  )
}

export default HomePage
