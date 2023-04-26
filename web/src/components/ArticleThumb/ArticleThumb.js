import { Link, routes } from '@redwoodjs/router'

const ArticleThumb = ({ article }) => {
  return (
    <article
      id={`article-${article.id}`}
      className="article-thumb"
      key={article.id}
    >
      <Link to={routes.article({ id: article.id })}>
        <img className="featured-image" src={article.url} alt={article.title} />
        <header>
          <h2>{article.title}</h2>
        </header>
      </Link>
    </article>
  )
}

export default ArticleThumb
