import { Head } from '@redwoodjs/web'

const Photo = ({ photo }) => {
  return (
    <div>
      <Head>
        <title>{photo.title} | Photography</title>
      </Head>
      <div className="photo-container" key={photo.id}>
        <img
          loading="lazy"
          className="photo"
          src={photo.url}
          alt={photo.title}
        />
        <h1>{photo.title}</h1>
      </div>
    </div>
  )
}

export default Photo
