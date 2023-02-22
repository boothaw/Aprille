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

export const Success = ({ photos }) => {
  const mix = (arr) => [...arr].sort(() => Math.random() - 0.5)
  const shuffledPhotos = mix(photos)

  return (
    <div className="photography-section">
      {shuffledPhotos.map((item) => {
        return (
          <a href="/no" className="photo-container" key={item.id}>
            <img className="photo" src={item.url} alt={item.title} />
          </a>
        )
      })}
    </div>
  )
}
