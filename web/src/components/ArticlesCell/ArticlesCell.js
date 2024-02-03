import ArticleThumb from '../ArticleThumb/ArticleThumb'
import LoadingWave from '../LoadingWave/LoadingWave'

export const QUERY = gql`
  query ArticlesQuery {
    articles: projects {
      id
      title
      url
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Nothing here yet</div>

export const Failure = ({ error }) => {
  console.log('error', { error })
  return (
    <div className="error-message">
      Sorry, something went wrong. Error: {error?.message}
    </div>
  )
}

export const Success = ({ articles, exclude }) => {
  return (
    <div className="projects-section">
      {articles
        .filter((article) => article.id !== exclude)
        .map((article) => {
          return <ArticleThumb key={article.id} article={article} />
        })}
    </div>
  )
}
