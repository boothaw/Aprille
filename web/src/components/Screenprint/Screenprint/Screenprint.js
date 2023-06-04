import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_SCREENPRINT_MUTATION = gql`
  mutation DeleteScreenprintMutation($id: Int!) {
    deleteScreenprint(id: $id) {
      id
    }
  }
`

const Screenprint = ({ screenprint }) => {
  const [deleteScreenprint] = useMutation(DELETE_SCREENPRINT_MUTATION, {
    onCompleted: () => {
      toast.success('Screenprint deleted')
      navigate(routes.screenprints())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete screenprint ' + id + '?')) {
      deleteScreenprint({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Screenprint {screenprint.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{screenprint.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{screenprint.title}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{screenprint.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editScreenprint({ id: screenprint.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(screenprint.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Screenprint
