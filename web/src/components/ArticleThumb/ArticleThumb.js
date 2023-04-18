import { Link, routes } from '@redwoodjs/router'

const ArticleThumb = ({ article }) => {
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <img className="featured-image" src={article.url} alt={article.title} />
    </article>
  )
}

export default ArticleThumb
