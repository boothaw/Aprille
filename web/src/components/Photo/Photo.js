const Photo = ({ photo }) => {
  return (
    <div className="photo-container" key={photo.id}>
      <img className="photo" src={photo.url} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  )
}

export default Photo
