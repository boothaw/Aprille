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
            toast.error(error.message)
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
      <MetaTags
        title="Profile & Contact"
        description="Aprille Zammit is an artist who
            channels her passions into various media. The disciplines closest to
            her heart are screen printing and film photography."
      />

      <div className="about-page copy-section">
        <Wave title="Bio & Contact"></Wave>
        <div className="copy-section__inner">
          <img
            loading="lazy"
            className="headshot"
            src="https://res.cloudinary.com/dfpiloj6e/image/upload/h_1200,c_scale,q_auto,f_auto/v1759099532/w6zoacbnlsycjqvlu7ig.jpg"
            alt="Aprille"
          />
          <p>
            <span>Aprille</span> is a passionate artist who channels her
            creativity into various mediums, with screen printing and film
            photography being the disciplines closest to her heart. She honed
            her skills and deepened her interest in screen printing while
            pursuing a BFA in graphic design and printmaking at Virginia
            Commonwealth University in the USA. After gaining professional
            experience in Virginia, Aprille returned to Malta and established
            her own screen printing studio.s
          </p>
          <p>
            Nature serves as the primary source of inspiration for Aprille’s
            art, with a particular reverence for the sea evident in her work.
            Through her artistic expressions, she aims to evoke feelings of hope
            and gratitude for the beauty of the natural world, offering a
            tribute to the ever-changing present moment. She embraces
            experimentation and playfulness in her work, allowing ideas to take
            shape organically and creating space for innovation to flourish.
          </p>
          <p>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/aprille-zammit-129b59128/"
            >
              More Detailed Background
            </a>
          </p>
          <div className="extra-space shows-section">
            <h2>Exhibitions/Publications: </h2>
            <p>
              <span>SPRING,</span> Finding Ease, collective exhibition, Gabriel
              Caruana Foundation, 2024
            </p>
            <p>
              <a
                target="__blank"
                href="https://carmencitafilmlab.com/blog/best-of-2022/"
              >
                CARMENCITA BEST OF 2022,
              </a>{' '}
              film photo selected and published, Carmencita, Spain, 2023
            </p>
            <p>
              <span>MARA 2, </span>
              Interdisciplinary exhibition, Valletta, 2023
            </p>
            <p>
              <span>Between Layers,</span> Collaborative exhibition with Rose
              Nygaard, Arts on Main, Gloucester VA, 2023
            </p>
            <p>
              <span>FUSE,</span> Refraction, Public installation, Valletta,
              Group Exhibition, Funded by Valletta Cultural Agency, 2021
            </p>
            <p>
              <span>FOTOBOOK #02,</span> 3 photos published, Editor: Zvezdan
              Reljic, 2020 Surfvisuals online essay publication -{' '}
              <a
                href="https://surfvisuals.com.au/blogs/yours/april-zammit"
                target="__blank"
              >
                The Turbulent & Wonderful Rides,{' '}
              </a>
              2019
            </p>
            <p>
              <span>2nd Annual Open Juried Art</span> - Arts on Main, Gloucester
              VA, Group exhibition 2019
            </p>

            <p>
              <span>Action Planet Exhibition,</span> Spazju Kreattiv, Group
              exhibition, 2018
            </p>
            <p>
              <span>Senior Show 2016,</span> Main Street Richmond, BA Group
              exhibition, 2016
            </p>
          </div>

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
