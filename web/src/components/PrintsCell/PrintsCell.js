import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export const QUERY = gql`
  query PrintsQuery {
    screenprints {
      id
      title
      url
      description
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
  parts.splice(3, 0, 'resize=height:800')
  return parts.join('/')
}

export const Success = ({ screenprints }) => {
  // const options = {
  //   gallery: '#gallery--with-custom-caption',
  // }
  return (
    <div className="photography-section-grid screenprint-section-grid">
      <Gallery withCaption>
        {screenprints.slice(10, 15).map((photo) => {
          return (
            <div
              className="photo-container photo-thumbnail print-container"
              key={photo.id}
            >
              <Item
                alt={photo.title}
                original={shrinker(photo.url)}
                thumbnail={shrinker(photo.url)}
                caption={photo?.description || photo.title}
                width="auto"
                max-height="100%"
              >
                {({ ref, open }) => (
                  /* eslint-disable */
                  <img
                    tabIndex={0}
                    alt={photo.title}
                    ref={ref}
                    onClick={open}
                    onKeyDown={open}
                    src={shrinker(photo.url)}
                  />
                )}
              </Item>
            </div>
          )
        })}
      </Gallery>
    </div>
  )
}
