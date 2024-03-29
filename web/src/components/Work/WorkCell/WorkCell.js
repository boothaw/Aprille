import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import Work from 'src/components/Work/Work'

export const QUERY = gql`
  query FindWorkById($id: Int!) {
    work: work(id: $id) {
      id
      title
      url
      description
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Work not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ work }) => {
  return <Work work={work} />
}
