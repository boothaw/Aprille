import { render } from '@redwoodjs/testing/web'

import LoadingWave from './LoadingWave'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingWave', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingWave />)
    }).not.toThrow()
  })
})
