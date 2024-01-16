import { render } from '@redwoodjs/testing/web'

import Wave from './Wave'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Wave', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Wave />)
    }).not.toThrow()
  })
})
