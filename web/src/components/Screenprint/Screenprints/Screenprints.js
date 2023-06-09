import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Screenprint/ScreenprintsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SCREENPRINT_MUTATION = gql`
  mutation DeleteScreenprintMutation($id: Int!) {
    deleteScreenprint(id: $id) {
      id
    }
  }
`

const ScreenprintsList = ({ screenprints }) => {
  const [deleteScreenprint] = useMutation(DELETE_SCREENPRINT_MUTATION, {
    onCompleted: () => {
      toast.success('Screenprint deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete screenprint ' + id + '?')) {
      deleteScreenprint({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {screenprints.map((screenprint) => (
            <tr key={screenprint.id}>
              <td>{truncate(screenprint.id)}</td>
              <td>{truncate(screenprint.title)}</td>
              <td>{truncate(screenprint.url)}</td>
              <td>{truncate(screenprint.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.screenprint({ id: screenprint.id })}
                    title={'Show screenprint ' + screenprint.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editScreenprint({ id: screenprint.id })}
                    title={'Edit screenprint ' + screenprint.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete screenprint ' + screenprint.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(screenprint.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScreenprintsList
