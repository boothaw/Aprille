import PhotoThumb from '../PhotoThumb/PhotoThumb'

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
    <div className="photography-section-grid">
      {photosRev
        .filter((photo) => photo.id !== exclude)
        .map((photo) => {
          return (
            <PhotoThumb key={photo.id} id={photo.id} photo={photo}></PhotoThumb>
          )
        })}
    </div>
  )
}
