import { Gallery, Item } from 'react-photoswipe-gallery'

// import PhotoThumb from '../PhotoThumb/PhotoThumb'
import 'photoswipe/dist/photoswipe.css'
import LoadingWave from '../LoadingWave/LoadingWave'

export const QUERY = gql`
  query PhotosQuery {
    photos: images {
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

const shrinker = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=height:800')
  return parts.join('/')
}

export const Success = ({ photos, exclude }) => {
  const photosRev = [...photos].reverse()

  return (
    <div className="photography-section-grid">
      {/* {photosRev
        .filter((photo) => photo.id !== exclude)
        .map((photo) => {
          return (
            <PhotoThumb key={photo.id} id={photo.id} photo={photo}></PhotoThumb>
          )
        })} */}
      <Gallery>
        {photosRev.slice(0, 25).map((photo) => {
          return (
            <div className="photo-container photo-thumbnail" key={photo.id}>
              <Item
                alt={photo.title}
                original={photo.url}
                thumbnail={shrinker(photo.url)}
                width="auto"
                max-height="100%"
              >
                {({ ref, open }) => (
                  <div
                    role="presentation"
                    ref={ref}
                    onClick={open}
                    onKeyDown={open}
                    className="photo-container photo-thumbnail print-container"
                  >
                    <img className="photo" alt={photo.title} src={photo.url} />
                    <div className="hover-card">
                      <h2>{photo.title}</h2>
                    </div>
                  </div>
                )}
              </Item>
            </div>
          )
        })}
      </Gallery>
    </div>
  )
}
