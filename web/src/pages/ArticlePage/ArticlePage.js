import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
      <div>My id is {id}</div>
    </>
  )
}

export default ArticlePage
