import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

import ContactPage from '../ContactPage/ContactPage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <>
        <ArticlesCell></ArticlesCell>
        <ContactPage></ContactPage>
      </>
    </>
  )
}

export default HomePage
