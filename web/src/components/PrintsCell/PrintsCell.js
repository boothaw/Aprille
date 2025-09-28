import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import LoadingWave from '../LoadingWave/LoadingWave'

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

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  console.log('error', { error })
  return (
    <div className="error-message">
      Sorry, something went wrong. Error: {error?.message}
    </div>
  )
}

// Utility to insert a Cloudinary transformation string into a URL
const transformCloudinaryUrl = (url, transformation) => {
  if (!url) return null
  const parts = url.split('/upload/')
  return `${parts[0]}/upload/${transformation}/${parts[1]}`
}

// Shrinker: height 300, auto format and quality
const shrinker = (url) => {
  return transformCloudinaryUrl(url, 'h_300,c_scale,q_auto,f_auto')
}

// Gallery sized: height 1200, auto format and quality
const gallerySized = (url) => {
  return transformCloudinaryUrl(url, 'h_1200,c_scale,q_auto,f_auto')
}

export const Success = ({ screenprints, filter }) => {
  return (
    <div className="photography-section-grid screenprint-section-grid">
      <Gallery>
        {screenprints.slice(0, filter).map((photo) => {
          return (
            <div
              className="photo-container photo-thumbnail print-container"
              key={photo.id}
            >
              <Item
                alt={photo.title}
                original={gallerySized(photo.url)}
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
                    <img
                      loading="lazy"
                      alt={photo.title}
                      src={shrinker(photo.url)}
                    />
                    {/* <div className="hover-card">
                      <h2>{photo.title}</h2>
                    </div> */}
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
