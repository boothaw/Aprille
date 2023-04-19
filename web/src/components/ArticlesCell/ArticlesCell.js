import ArticleThumb from '../ArticleThumb/ArticleThumb'

export const QUERY = gql`
  query ArticlesQuery {
    articles: projects {
      id
      title
      url
    }
  }
`

export const Loading = () => (
  <div className="waves-loading">The Waves Are Calling</div>
)

export const Empty = () => <div>Uhh not ready yet</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles, exclude }) => {
  return (
    <div className="projects-section" id="projects">
      {articles
        .filter((article) => article.id !== exclude)
        .map((article) => {
          return <ArticleThumb key={article.id} article={article} />
        })}
    </div>
  )
}
