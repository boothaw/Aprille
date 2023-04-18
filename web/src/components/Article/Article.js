import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <p>{article.body2}</p>
      <p>{article.body3}</p>
      <p>{article.url2}</p>
      <img className="featured-image" src={article.url} alt={article.title} />
      <img className="featured-image" src={article.url2} alt={article.title} />
      <img className="featured-image" src={article.url3} alt={article.title} />
      <img className="featured-image" src={article.url4} alt={article.title} />
      <img className="featured-image" src={article.url5} alt={article.title} />
      <img className="featured-image" src={article.url6} alt={article.title} />
      <img className="featured-image" src={article.url7} alt={article.title} />
      <img className="featured-image" src={article.url8} alt={article.title} />
    </article>
  )
}

export default Article
