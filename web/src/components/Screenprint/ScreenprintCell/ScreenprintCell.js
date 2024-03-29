import LoadingWave from 'src/components/LoadingWave/LoadingWave'
import Screenprint from 'src/components/Screenprint/Screenprint'

export const QUERY = gql`
  query FindScreenprintById($id: Int!) {
    screenprint: screenprint(id: $id) {
      id
      title
      url
      description
    }
  }
`

export const Loading = () => <LoadingWave></LoadingWave>

export const Empty = () => <div>Screenprint not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ screenprint }) => {
  return <Screenprint screenprint={screenprint} />
}
