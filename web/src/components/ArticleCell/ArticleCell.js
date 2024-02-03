import Article from '../Article/Article'
import LoadingWave from '../LoadingWave/LoadingWave'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: project(id: $id) {
      id
      title
      body
      body2
      body3
      createdAt
      url
      url2
      url3
      url4
      url5
      url6
      url7
      url8
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Emptyyy</div>

export const Failure = ({ error }) => {
  console.log('error', { error })
  return (
    <div className="error-message">
      Sorry, something went wrong. Error: {error?.message}
    </div>
  )
}

export const Success = ({ article }) => {
  return <Article article={article} />
}
