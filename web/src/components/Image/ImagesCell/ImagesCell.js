import { Link, routes } from '@redwoodjs/router'

import Images from 'src/components/Image/Images'
import LoadingWave from 'src/components/LoadingWave/LoadingWave'

export const QUERY = gql`
  query FindImages {
    images {
      id
      title
      url
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No images yet. '}
      <Link to={routes.newImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ images }) => {
  return <Images images={images} />
}
