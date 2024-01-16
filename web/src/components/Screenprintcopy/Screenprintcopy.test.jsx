import { render } from '@redwoodjs/testing/web'

import Screenprintcopy from './Screenprintcopy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Screenprintcopy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Screenprintcopy />)
    }).not.toThrow()
  })
})
