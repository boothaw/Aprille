import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import ArticlesCell from 'src/components/ArticlesCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Projects" description="Projects Page" />

      <ArticleCell id={id} />
      <img className="wave-svg" src="/wave-cropped.svg" alt="wave divider" />
      <h2 className="additional-work-title">More...</h2>
      <ArticlesCell exclude={id}></ArticlesCell>
    </>
  )
}

export default ArticlePage
