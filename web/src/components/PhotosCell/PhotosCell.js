import Photo from '../Photo/Photo'

export const QUERY = gql`
  query PhotosQuery {
    photos: images {
      id
      url
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ photos, exclude }) => {
  const photosRev = [...photos].reverse()

  return (
    <div className="photography-section-grid" id="photos">
      {photosRev
        .filter((photo) => photo.id !== exclude)
        .map((photo) => {
          return <Photo key={photo.id} id={photo.id} photo={photo}></Photo>
        })}
    </div>
  )
}
