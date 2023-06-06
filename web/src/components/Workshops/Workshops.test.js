import { render } from '@redwoodjs/testing/web'

import Workshops from './Workshops'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Workshops', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Workshops />)
    }).not.toThrow()
  })
})
