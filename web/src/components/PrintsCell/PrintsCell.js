export const QUERY = gql`
  query PrintsQuery {
    screenprints {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const shrinker = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=height:800')
  return parts.join('/')
}

export const Success = ({ screenprints }) => {
  return (
    <div>
      {screenprints.map((print) => {
        return (
          <div key={print.id}>
            <img
              className="photo"
              src={shrinker(print.url)}
              alt={print.title}
            />
            {/* <div className="hover-card">
              <h2>{print.title}</h2>
            </div> */}
          </div>
        )
      })}
    </div>
  )
}
