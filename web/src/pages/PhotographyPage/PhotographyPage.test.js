import { render } from '@redwoodjs/testing/web'

import PhotographyPage from './PhotographyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PhotographyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhotographyPage />)
    }).not.toThrow()
  })
})
