import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_WORK_MUTATION = gql`
  mutation DeleteWorkMutation($id: Int!) {
    deleteWork(id: $id) {
      id
    }
  }
`

const Work = ({ work }) => {
  const [deleteWork] = useMutation(DELETE_WORK_MUTATION, {
    onCompleted: () => {
      toast.success('Work deleted')
      navigate(routes.works())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete work ' + id + '?')) {
      deleteWork({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Work {work.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{work.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{work.title}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{work.url}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{work.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWork({ id: work.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(work.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Work
