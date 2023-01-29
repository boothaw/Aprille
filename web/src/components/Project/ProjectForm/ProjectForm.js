import { useState } from 'react'

import { PickerInline } from 'filestack-react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)

  const onSubmit = (data) => {
    // props.onSave(data, props?.project?.id)
    const dataWithUrl = Object.assign(data, { url })
    props.onSave(dataWithUrl, props?.image)
  }

  // OG above

  // const onSubmit = (data) => {
  //   const dataWithUrl = Object.assign(data, { url })
  //   props.onSave(dataWithUrl, props?.image?.id)
  //   // props.onSave(data, props?.image?.id)
  // }

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url)
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
          defaultValue={props.project?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.project?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        >
          <div
            style={{ display: url ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

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
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
