import { Link, routes } from '@redwoodjs/router'

import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import Screenprints from 'src/components/Screenprint/Screenprints'

export const QUERY = gql`
  query FindScreenprints {
    screenprints {
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
      {'No screenprints yet. '}
      <Link to={routes.newScreenprint()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ screenprints }) => {
  return <Screenprints screenprints={screenprints} />
}
