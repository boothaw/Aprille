import { Link, routes } from '@redwoodjs/router'

import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import Works from 'src/components/Work/Works'

export const QUERY = gql`
  query FindWorks {
    works {
      id
      title
      url
      description
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No works yet. '}
      <Link to={routes.newWork()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ works }) => {
  return <Works works={works} />
}
