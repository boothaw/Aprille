import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

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
      {/* {screenprints.slice(0, 6).map((photo) => {
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
      })} */}
      <Gallery>
        <Item
          original="https://placekitten.com/1024/768?image=1"
          thumbnail="https://placekitten.com/80/60?image=1"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=1"
            />
          )}
        </Item>
        <Item
          original="https://placekitten.com/1024/768?image=2"
          thumbnail="https://placekitten.com/80/60?image=2"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=2"
            />
          )}
        </Item>
      </Gallery>
    </div>
  )
}
