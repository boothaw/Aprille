import { Link, routes } from '@redwoodjs/router'

const Photo = ({ photo }) => {
  return (
    <Link
      to={routes.photo({
        id: photo.id,
      })}
      className="photo-container"
      key={photo.id}
    >
      <img className="photo" src={photo.url} alt={photo.title} />
      <h2>{photo.title}</h2>
    </Link>
  )
}

export default Photo
