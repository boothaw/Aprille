import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScreenprintForm from 'src/components/Screenprint/ScreenprintForm'

const CREATE_SCREENPRINT_MUTATION = gql`
  mutation CreateScreenprintMutation($input: CreateScreenprintInput!) {
    createScreenprint(input: $input) {
      id
    }
  }
`

const NewScreenprint = () => {
  const [createScreenprint, { loading, error }] = useMutation(
    CREATE_SCREENPRINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Screenprint created')
        navigate(routes.screenprints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createScreenprint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Screenprint</h2>
      </header>
      <div className="rw-segment-main">
        <ScreenprintForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewScreenprint
