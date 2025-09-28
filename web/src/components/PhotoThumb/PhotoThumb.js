import { Link, routes } from '@redwoodjs/router'

const PhotoThumb = ({ photo }) => {
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

  return (
    <Link
      to={routes.photo({
        id: photo.id,
      })}
      className="photo-container photo-thumbnail"
      key={photo.id}
    >
      <img
        loading="lazy"
        className="photo"
        src={shrinker(photo.url)}
        alt={photo.title}
      />
      <div className="hover-card">
        <h2>{photo.title}</h2>
      </div>
    </Link>
  )
}

export default PhotoThumb
