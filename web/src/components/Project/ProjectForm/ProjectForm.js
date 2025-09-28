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
import { toast } from '@redwoodjs/web/toast'

const ProjectForm = (props) => {
  const [url, setUrl] = useState(props?.project?.url)
  const [url2, setUrl2] = useState(props?.project?.url2)
  const [url3, setUrl3] = useState(props?.project?.url3)
  const [url4, setUrl4] = useState(props?.project?.url4)
  const [url5, setUrl5] = useState(props?.project?.url5)
  const [url6, setUrl6] = useState(props?.project?.url6)
  const [url7, setUrl7] = useState(props?.project?.url7)
  const [url8, setUrl8] = useState(props?.project?.url8)

  const onSubmit = (data) => {
    if (url) {
      const dataWithUrl = Object.assign(data, {
        url,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
      })
      props.onSave(dataWithUrl, props?.project?.id)
    } else {
      toast.error('upload an image')
    }
  }

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url)
  }

  const onFileUpload2 = (response) => {
    setUrl2(response.filesUploaded[0].url)
  }

  const onFileUpload3 = (response) => {
    setUrl3(response.filesUploaded[0].url)
  }

  const onFileUpload4 = (response) => {
    setUrl4(response.filesUploaded[0].url)
  }

  const onFileUpload5 = (response) => {
    setUrl5(response.filesUploaded[0].url)
  }

  const onFileUpload6 = (response) => {
    setUrl6(response.filesUploaded[0].url)
  }

  const onFileUpload7 = (response) => {
    setUrl7(response.filesUploaded[0].url)
  }

  const onFileUpload8 = (response) => {
    setUrl8(response.filesUploaded[0].url)
  }

  // old onSubmit
  // const onSubmit = (data) => {
  //   props.onSave(data, props?.project?.id)
  // }

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

        <Label
          name="body2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body2
        </Label>

        <TextField
          name="body2"
          defaultValue={props.project?.body2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="body2" className="rw-field-error" />

        <Label
          name="body3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body3
        </Label>

        <TextField
          name="body3"
          defaultValue={props.project?.body3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="body3" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        {/* <TextField
          name="url"
          defaultValue={props.project?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          validation={{ required: true }}
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

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="url2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url2
        </Label>

        {/* <TextField
          name="url2"
          defaultValue={props.project?.url2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload2}
        >
          <div
            style={{ display: url2 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url2 && (
          <div>
            <img
              alt={url2}
              src={url2}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl2(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url2" className="rw-field-error" />

        <Label
          name="url3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url3
        </Label>

        {/* <TextField
          name="url3"
          defaultValue={props.project?.url3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload3}
        >
          <div
            style={{ display: url3 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url3 && (
          <div>
            <img
              alt={url3}
              src={url3}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl3(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url3" className="rw-field-error" />

        <Label
          name="url4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url4
        </Label>

        {/* <TextField
          name="url4"
          defaultValue={props.project?.url4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload4}
        >
          <div
            style={{ display: url4 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url4 && (
          <div>
            <img
              alt={url4}
              src={url4}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl4(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url4" className="rw-field-error" />

        <Label
          name="url5"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url5
        </Label>

        {/* <TextField
          name="url5"
          defaultValue={props.project?.url5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload5}
        >
          <div
            style={{ display: url5 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url5 && (
          <div>
            <img
              alt={url5}
              src={url5}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl5(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url5" className="rw-field-error" />

        <Label
          name="url6"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url6
        </Label>

        {/* <TextField
          name="url6"
          defaultValue={props.project?.url6}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload6}
        >
          <div
            style={{ display: url6 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url6 && (
          <div>
            <img
              alt={url6}
              src={url6}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl6(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url6" className="rw-field-error" />

        <Label
          name="url7"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url7
        </Label>

        {/* <TextField
          name="url7"
          defaultValue={props.project?.url7}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload7}
        >
          <div
            style={{ display: url7 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url7 && (
          <div>
            <img
              alt={url7}
              src={url7}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl7(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url7" className="rw-field-error" />

        <Label
          name="url8"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url8
        </Label>

        {/* <TextField
          name="url8"
          defaultValue={props.project?.url8}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload8}
        >
          <div
            style={{ display: url8 ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url8 && (
          <div>
            <img
              alt={url8}
              src={url8}
              style={{ display: 'block', margin: '2rem 0' }}
            />
            <button
              onClick={() => setUrl8(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="url8" className="rw-field-error" />

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
