import { render } from '@redwoodjs/testing/web'

import PhotoThumb from './PhotoThumb'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhotoThumb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhotoThumb />)
    }).not.toThrow()
  })
})
