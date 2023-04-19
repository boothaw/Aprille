// import { render } from '@react-email/render'
// import nodemailer from 'nodemailer'

import React, { useRef } from 'react'

import emailjs from '@emailjs/browser'

import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FieldError,
  useForm,
  FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const AboutPage = () => {
  const form = useRef()

  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    emailjs
      .send('service_n4oomp8', 'template_yl07ra6', data, '_Tp0IwFf5UB99eAmt')
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      )

    create({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="about-page">
        <p>
          Aprille Zammit can often be found in her studio, covered in ink
          working on her next creative project. A graphic designer and DIY
          screen printer who chose to follow her passion and devote much more
          time to this craft. Having studied at VCU in Richmond Virginia for 4
          years, Aprille has always been in a rich creative environment and her
          dream is to help create a more vibrant and active creative community
          in Malta. She finds most of her inspiration from nature and the
          oceans, being a lover of any and all water-related sports. She can
          also rarely be seen without a film camera hanging from her neck, as
          film photography is just one of her other passions
        </p>
      </div>
      <Toaster></Toaster>
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError error={error} wrapperClassName="form-error" />
        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="error" />

        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Send Message</Submit>
      </Form>
    </>
  )
}

export default AboutPage
