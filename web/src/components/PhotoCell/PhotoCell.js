import LoadingWave from '../LoadingWave/LoadingWave'
import Photo from '../Photo/Photo'

export const QUERY = gql`
  query FindPhotoQuery($id: Int!) {
    photo: image(id: $id) {
      id
      url
      title
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ photo }) => {
  return <Photo photo={photo}></Photo>
}
