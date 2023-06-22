import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WorkForm from 'src/components/Work/WorkForm'

const CREATE_WORK_MUTATION = gql`
  mutation CreateWorkMutation($input: CreateWorkInput!) {
    createWork(input: $input) {
      id
    }
  }
`

const NewWork = () => {
  const [createWork, { loading, error }] = useMutation(CREATE_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('Work created')
      navigate(routes.works())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWork({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Work</h2>
      </header>
      <div className="rw-segment-main">
        <WorkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWork
