import { Link, routes } from '@redwoodjs/router'

const PhotoThumb = ({ photo }) => {
  return (
    <Link
      to={routes.photo({
        id: photo.id,
      })}
      className="photo-container photo-thumbnail"
      key={photo.id}
    >
      <img className="photo" src={photo.url} alt={photo.title} />
      <h2>{photo.title}</h2>
    </Link>
  )
}

export default PhotoThumb
