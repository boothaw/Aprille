const Article = ({ article }) => {
  return (
    <article id={`article-${article.id}`} className="article" key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.body}</p>
      <p>{article.body2}</p>
      <p>{article.body3}</p>
      <img
        className="featured-image"
        src={
          article.url ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-imageeee"
        src={
          article.url2 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url3 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url4 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url5 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url6 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url7 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
      <img
        className="featured-image"
        src={
          article.url8 ||
          'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
        }
        onError={(e) => (e.target.style.display = 'none')}
        alt={article.title}
      />
    </article>
  )
}

export default Article
