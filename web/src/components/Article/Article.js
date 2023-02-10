import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  // console.log(article.url)
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <img className="featured-image" src={article.url} alt={article.title} />
      <img className="wave-div" src="/wave.svg" alt="wave divider" />
    </article>
  )
}

export default Article
