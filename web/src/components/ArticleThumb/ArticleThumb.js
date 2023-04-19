import { Link, routes } from '@redwoodjs/router'

const ArticleThumb = ({ article }) => {
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <Link to={routes.article({ id: article.id })}>
        <header>
          <h2>{article.title}</h2>
        </header>
        <img className="featured-image" src={article.url} alt={article.title} />
      </Link>
    </article>
  )
}

export default ArticleThumb
