import { useState } from 'react'

import { PickerInline } from 'filestack-react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  FileField,
  Submit,
} from '@redwoodjs/forms'

const WorkForm = (props) => {
  const [url, setUrl] = useState(props?.work?.url)
  const [uploading, setUploading] = useState(false)

  const onSubmit = (data) => {
    const { title, description } = data
    const dataWithUrl = { title, description, url }
    props.onSave(dataWithUrl, props?.screenprint?.id)
  }

  const uploadToCloudinary = async (file) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.CLOUDINARY_PRESET)

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`,
        { method: 'POST', body: formData }
      )
      const json = await res.json()
      setUrl(json.secure_url)
    } catch (error) {
      console.error('Cloudinary upload error:', error)
    } finally {
      setUploading(false)
    }
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
          defaultValue={props.work?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.work?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image -- {props.work?.url}
        </Label>

        {!url && (
          <div>
            <Label
              name="image"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
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
              alt={url}
              src={url}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <div className="rw-button-group">
          <Submit
            disabled={props.loading || uploading || !url}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WorkForm
