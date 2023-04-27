import { render } from '@redwoodjs/testing/web'

import Scrollhash from './Scrollhash'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Scrollhash', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Scrollhash />)
    }).not.toThrow()
  })
})
