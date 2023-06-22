import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WorkForm from 'src/components/Work/WorkForm'

export const QUERY = gql`
  query EditWorkById($id: Int!) {
    work: work(id: $id) {
      id
      title
      url
      description
    }
  }
`
const UPDATE_WORK_MUTATION = gql`
  mutation UpdateWorkMutation($id: Int!, $input: UpdateWorkInput!) {
    updateWork(id: $id, input: $input) {
      id
      title
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ work }) => {
  const [updateWork, { loading, error }] = useMutation(UPDATE_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('Work updated')
      navigate(routes.works())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateWork({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Work {work?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WorkForm work={work} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
