import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
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

        <TextField
          name="url"
          defaultValue={props.project?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="url2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url2
        </Label>

        <TextField
          name="url2"
          defaultValue={props.project?.url2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url2" className="rw-field-error" />

        <Label
          name="url3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url3
        </Label>

        <TextField
          name="url3"
          defaultValue={props.project?.url3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url3" className="rw-field-error" />

        <Label
          name="url4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url4
        </Label>

        <TextField
          name="url4"
          defaultValue={props.project?.url4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url4" className="rw-field-error" />

        <Label
          name="url5"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url5
        </Label>

        <TextField
          name="url5"
          defaultValue={props.project?.url5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url5" className="rw-field-error" />

        <Label
          name="url6"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url6
        </Label>

        <TextField
          name="url6"
          defaultValue={props.project?.url6}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url6" className="rw-field-error" />

        <Label
          name="url7"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url7
        </Label>

        <TextField
          name="url7"
          defaultValue={props.project?.url7}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="url7" className="rw-field-error" />

        <Label
          name="url8"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url8
        </Label>

        <TextField
          name="url8"
          defaultValue={props.project?.url8}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

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
