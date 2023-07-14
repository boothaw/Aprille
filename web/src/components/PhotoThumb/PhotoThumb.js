import { Link, routes } from '@redwoodjs/router'

const PhotoThumb = ({ photo }) => {
  const shrinker = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=height:1200')
    return parts.join('/')
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
