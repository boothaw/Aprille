import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: project(id: $id) {
      id
      title
      body
      createdAt
      # url - will this cause error?
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Emptyyy</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }) => {
  return <Article article={article} />
}
