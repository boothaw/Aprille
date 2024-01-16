import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const Project = ({ project }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
      navigate(routes.projects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{project.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{project.body}</td>
            </tr>
            <tr>
              <th>Body2</th>
              <td>{project.body2}</td>
            </tr>
            <tr>
              <th>Body3</th>
              <td>{project.body3}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(project.createdAt)}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{project.url}</td>
            </tr>
            <tr>
              <th>Url2</th>
              <td>{project.url2}</td>
            </tr>
            <tr>
              <th>Url3</th>
              <td>{project.url3}</td>
            </tr>
            <tr>
              <th>Url4</th>
              <td>{project.url4}</td>
            </tr>
            <tr>
              <th>Url5</th>
              <td>{project.url5}</td>
            </tr>
            <tr>
              <th>Url6</th>
              <td>{project.url6}</td>
            </tr>
            <tr>
              <th>Url7</th>
              <td>{project.url7}</td>
            </tr>
            <tr>
              <th>Url8</th>
              <td>{project.url8}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProject({ id: project.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(project.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Project
