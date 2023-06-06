import { render } from '@redwoodjs/testing/web'

import WorkshopsPage from './WorkshopsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkshopsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkshopsPage />)
    }).not.toThrow()
  })
})
