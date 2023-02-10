import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
// import ImageCell from 'src/components/Image/ImagesCell'

import ContactPage from '../ContactPage/ContactPage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <>
        <ArticlesCell></ArticlesCell>
        {/* <ImageCell></ImageCell> */}
        <ContactPage></ContactPage>
      </>
    </>
  )
}

export default HomePage
