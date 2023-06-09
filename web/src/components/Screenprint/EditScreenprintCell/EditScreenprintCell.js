import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScreenprintForm from 'src/components/Screenprint/ScreenprintForm'

export const QUERY = gql`
  query EditScreenprintById($id: Int!) {
    screenprint: screenprint(id: $id) {
      id
      title
      url
      description
    }
  }
`
const UPDATE_SCREENPRINT_MUTATION = gql`
  mutation UpdateScreenprintMutation(
    $id: Int!
    $input: UpdateScreenprintInput!
  ) {
    updateScreenprint(id: $id, input: $input) {
      id
      title
      url
      # description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ screenprint }) => {
  const [updateScreenprint, { loading, error }] = useMutation(
    UPDATE_SCREENPRINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Screenprint updated')
        navigate(routes.screenprints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateScreenprint({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Screenprint {screenprint?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ScreenprintForm
          screenprint={screenprint}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
