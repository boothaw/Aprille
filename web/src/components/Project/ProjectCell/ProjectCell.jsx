import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import Project from 'src/components/Project/Project'

export const QUERY = gql`
  query FindProjectById($id: Int!) {
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

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Project not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ project }) => {
  return <Project project={project} />
}
