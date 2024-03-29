import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import ProjectForm from 'src/components/Project/ProjectForm'

export const QUERY = gql`
  query EditProjectById($id: Int!) {
    project: project(id: $id) {
      id
      title
      body
      body2
      body3
      createdAt
      url
      url2
      url3
      url4
      url5
      url6
      url7
      url8
    }
  }
`
const UPDATE_PROJECT_MUTATION = gql`
  mutation UpdateProjectMutation($id: Int!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      title
      body
      body2
      body3
      createdAt
      url
      url2
      url3
      url4
      url5
      url6
      url7
      url8
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ project }) => {
  const [updateProject, { loading, error }] = useMutation(
    UPDATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Project updated')
        navigate(routes.projects())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProject({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Project {project?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjectForm
          project={project}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
