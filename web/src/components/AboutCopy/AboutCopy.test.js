import { render } from '@redwoodjs/testing/web'

import AboutCopy from './AboutCopy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutCopy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutCopy />)
    }).not.toThrow()
  })
})
