import Article from '../Article/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: projects {
      id
      title
      body
      createdAt
      url
      # figure out why this is still red ^^
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

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <Article key={article.id} article={article} />
  ))
}
