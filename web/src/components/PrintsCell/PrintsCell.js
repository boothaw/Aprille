export const QUERY = gql`
  query PrintsQuery {
    screenprints {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const shrinker = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=height:1200')
  return parts.join('/')
}

export const Success = ({ screenprints }) => {
  return (
    <div className="photography-section-grid screenprint-section-grid">
      {screenprints.slice(0, 5).map((photo) => {
        return (
          <div
            className="photo-container photo-thumbnail print-container"
            key={photo.id}
          >
            <img
              className="photo print"
              src={shrinker(photo.url)}
              alt={photo.title}
            />
          </div>
        )
      })}
    </div>
  )
}
