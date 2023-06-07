import { render } from '@redwoodjs/testing/web'

import ScreenprintingPage from './ScreenprintingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ScreenprintingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScreenprintingPage />)
    }).not.toThrow()
  })
})
