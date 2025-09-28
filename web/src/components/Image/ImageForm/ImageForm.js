import { useState } from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  FileField,
  Submit,
} from '@redwoodjs/forms'

const ImageForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)
  const [uploading, setUploading] = useState(false)

  const onSubmit = (data) => {
    const { title } = data // destructure only the fields we want
    const dataWithUrl = { title, url }
    props.onSave(dataWithUrl, props?.image?.id)
  }

  const uploadToCloudinary = async (file) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.CLOUDINARY_PRESET)

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    const json = await res.json()
    setUploading(false)
    setUrl(json.secure_url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.image?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        {!url && (
          <div>
            <Label name="image" className="rw-label">
              Upload Image
            </Label>
            <FileField
              name="image"
              className="rw-input"
              onChange={(e) => {
                const file = e.target.files[0]
                if (file) uploadToCloudinary(file)
              }}
            />
            {uploading && <p>Uploading...</p>}
          </div>
        )}

        {url && (
          <div>
            <img
              loading="lazy"
              alt={url}
              src={url}
              style={{ display: 'block', margin: '2rem 0', maxWidth: '300px' }}
            />
            <button
              type="button"
              onClick={() => setUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <div className="rw-button-group">
          <Submit
            disabled={props.loading || !url || uploading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
