import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import ArticlesCell from 'src/components/ArticlesCell'
import Wave from 'src/components/Wave/Wave'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Projects" description="Projects Page" />

      <ArticleCell id={id} />
      <Wave title="More Like This"></Wave>
      <ArticlesCell exclude={id}></ArticlesCell>
    </>
  )
}

export default ArticlePage
