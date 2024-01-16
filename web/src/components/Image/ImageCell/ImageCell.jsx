import Image from 'src/components/Image/Image'
import LoadingWave from 'src/components/LoadingWave/LoadingWave'

export const QUERY = gql`
  query FindImageById($id: Int!) {
    image: image(id: $id) {
      id
      title
      url
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Image not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ image }) => {
  return <Image image={image} />
}
