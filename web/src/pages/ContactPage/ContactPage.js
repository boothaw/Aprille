import { Redirect, routes } from '@redwoodjs/router'

const ContactPage = () => <Redirect to={routes.about()} />

export default ContactPage
