import { works, work, createWork, updateWork, deleteWork } from './works'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('works', () => {
  scenario('returns all works', async (scenario) => {
    const result = await works()

    expect(result.length).toEqual(Object.keys(scenario.work).length)
  })

  scenario('returns a single work', async (scenario) => {
    const result = await work({ id: scenario.work.one.id })

    expect(result).toEqual(scenario.work.one)
  })

  scenario('creates a work', async () => {
    const result = await createWork({
      input: { title: 'String', url: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a work', async (scenario) => {
    const original = await work({ id: scenario.work.one.id })
    const result = await updateWork({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a work', async (scenario) => {
    const original = await deleteWork({ id: scenario.work.one.id })
    const result = await work({ id: original.id })

    expect(result).toEqual(null)
  })
})
