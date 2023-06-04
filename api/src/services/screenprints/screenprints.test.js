import {
  screenprints,
  screenprint,
  createScreenprint,
  updateScreenprint,
  deleteScreenprint,
} from './screenprints'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('screenprints', () => {
  scenario('returns all screenprints', async (scenario) => {
    const result = await screenprints()

    expect(result.length).toEqual(Object.keys(scenario.screenprint).length)
  })

  scenario('returns a single screenprint', async (scenario) => {
    const result = await screenprint({ id: scenario.screenprint.one.id })

    expect(result).toEqual(scenario.screenprint.one)
  })

  scenario('creates a screenprint', async () => {
    const result = await createScreenprint({
      input: { title: 'String', url: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a screenprint', async (scenario) => {
    const original = await screenprint({
      id: scenario.screenprint.one.id,
    })
    const result = await updateScreenprint({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a screenprint', async (scenario) => {
    const original = await deleteScreenprint({
      id: scenario.screenprint.one.id,
    })
    const result = await screenprint({ id: original.id })

    expect(result).toEqual(null)
  })
})
