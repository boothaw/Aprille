// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Scrollhash {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Scrollhash from './Scrollhash'

export const generated = () => {
  return <Scrollhash />
}

export default {
  title: 'Components/Scrollhash',
  component: Scrollhash,
}
