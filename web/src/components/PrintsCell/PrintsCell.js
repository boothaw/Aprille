import { useState } from 'react'

import Carousel, { Modal, ModalGateway } from 'react-images'

export const QUERY = gql`
  query PrintsQuery {
    screenprints {
      id
      title
      url
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
  parts.splice(3, 0, 'resize=height:1200')
  return parts.join('/')
}

export const Success = ({ screenprints }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = () => {
    setModalIsOpen((current) => !current)
    console.log('toggle modal 2', modalIsOpen)
  }
  const images = [
    {
      source:
        'https://cdn.filestackcontent.com/resize=height:1200/mgdDEGqISJGUPqUWKJp5',
    },
    {
      source:
        'https://cdn.filestackcontent.com/resize=height:1200/dvPqd7ySmKlCKP74nRwg',
    },
    {
      source:
        'https://cdn.filestackcontent.com/resize=height:1200/9Rw0CHoOQ6SniBTrzxEo',
    },
  ]

  return (
    <div className="photography-section-grid screenprint-section-grid">
<<<<<<< HEAD
      {screenprints.slice(0, 3).map((photo) => {
=======
      {screenprints.slice(0, 15).map((photo) => {
>>>>>>> main
        return (
          <button
            className="photo-container photo-thumbnail print-container"
            key={photo.id}
            onClick={() => {
              toggleModal()
            }}
          >
            <img
              className="photo print"
              src={shrinker(photo.url)}
              alt={photo.title}
            />
          </button>
        )
      })}
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleModal()}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
