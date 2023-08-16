import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import LoadingWave from '../LoadingWave/LoadingWave'

export const QUERY = gql`
  query WorkprintsQuery {
    prints: works {
      id
      title
      url
      description
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const thumbnailed = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=height:300')
  return parts.join('/')
}

const gallerySized = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=height:1200')
  return parts.join('/')
}

export const Success = ({ prints }) => {
  return (
    <div className="photography-section-grid screenprint-section-grid">
      <Gallery>
        {prints.slice(0, 25).map((photo) => {
          return (
            <div
              className="photo-container photo-thumbnail print-container"
              key={photo.id}
            >
              <Item
                alt={photo.title}
                original={gallerySized(photo.url)}
                thumbnail={thumbnailed(photo.url)}
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
                    <img
                      loading="lazy"
                      alt={photo.title}
                      src={thumbnailed(photo.url)}
                    />
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
