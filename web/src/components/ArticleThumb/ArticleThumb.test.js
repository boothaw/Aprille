import { render } from '@redwoodjs/testing/web'

import ArticleThumb from './ArticleThumb'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleThumb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleThumb />)
    }).not.toThrow()
  })
})
