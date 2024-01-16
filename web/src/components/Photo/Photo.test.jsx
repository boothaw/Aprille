import { render } from '@redwoodjs/testing/web'

import Photo from './Photo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Photo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Photo />)
    }).not.toThrow()
  })
})
