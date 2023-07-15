import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

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
// import { Toast } from '@redwoodjs/web/toast'
import { Toaster, toast } from '@redwoodjs/web/toast'

import Wave from 'src/components/Wave/Wave'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const AboutPage = () => {
  // const [showCaptcha, setShowCaptcha] = useState(false)
  const recaptchaRef = useRef()
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
    },
  })

  const onSubmit = async (data) => {
    const token = await recaptchaRef.current.executeAsync()

    console.log('service id/key', process.env.EMAIL_JS_SERVICE_KEY)

    if (token) {
      emailjs
        .send(
          process.env.EMAIL_JS_SERVICE_KEY,
          process.env.EMAIL_JS_TEMPLATE_KEY,
          data,
          '_Tp0IwFf5UB99eAmt'
        )
        .then(
          () => {
            // show the user a success message
            toast.success('Thank you for your message!')
          },
          (error) => {
            // show the user an error
            console.log(error)
          }
        )

      create({
        variables: {
          input: data,
        },
      })
    } else {
      toast.error('Sorry, you look like a robot. Try again later.')
    }
  }

  // function showReCaptcha() {
  //   !showCaptcha ? setShowCaptcha(true) : setShowCaptcha(true)
  // }

  return (
    <>
      <MetaTags title="Profile & Contact" description="About page" />

      <div className="about-page copy-section">
        <Wave title="Bio & Contact"></Wave>
        <div className="copy-section__inner">
          <img
            loading="lazy"
            className="headshot"
            src="https://cdn.filestackcontent.com/resize=height:1200/n6BgW3YxTzi9cLyQMmhp"
            alt="Aprille"
          />
          <p>
            <span className="navy bold">Aprille Zammit</span> can often be found
            in her studio, covered in ink working on her next creative project.
            A graphic designer and DIY screen printer who chose to follow her
            passion and devote much more time to this craft. Having studied at
            VCU in Richmond Virginia for 4 years, Aprille has always been in a
            rich creative environment and her dream is to help create a more
            vibrant and active creative community in Malta. She finds most of
            her inspiration from nature and the oceans, being a lover of any and
            all water-related sports. She can also rarely be seen without a film
            camera hanging from her neck, as film photography is just one of her
            other passions.
          </p>

          <div className="form-section">
            <h2>Say Hello!</h2>

            <Form
              className="contact-form"
              onSubmit={onSubmit}
              // onClick={showReCaptcha}
              formMethods={formMethods}
              error={error}
            >
              <FormError error={error} wrapperClassName="form-error" />
              <Label errorClassName="error" name="name">
                Name
              </Label>
              <TextField
                placeholder="Your Name"
                name="name"
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="name" className="error" />

              <Label errorClassName="error" name="email">
                Email
              </Label>
              <TextField
                placeholder="Your Email"
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
                placeholder="Your Message"
                name="message"
                errorClassName="error"
                validation={{ required: true }}
              />
              <FieldError name="message" className="error" />
              <Submit disabled={loading}>Submit</Submit>
              <ReCAPTCHA
                // className={`${
                //   showCaptcha ? 'active-recaptcha' : 'hidden-recaptcha'
                // }`}
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeInjUmAAAAAN8OOWg2l1HOotiCLjqMYhivL834"
              />
            </Form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  )
}

export default AboutPage
