import { Link, routes } from '@redwoodjs/router'

const ArticleThumb = ({ article }) => {
  const shrinker = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=height:800')
    return parts.join('/')
  }

  return (
    <article
      id={`article-${article.id}`}
      className="article-thumb"
      key={article.id}
    >
      <Link to={routes.article({ id: article.id })}>
        <img
          loading="lazy"
          className="featured-image"
          src={shrinker(article.url)}
          alt={article.title}
        />
        <header>
          <h2>{article.title}</h2>
        </header>
      </Link>
    </article>
  )
}

export default ArticleThumb
