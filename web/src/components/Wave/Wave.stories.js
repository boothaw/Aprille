// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Wave {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Wave from './Wave'

export const generated = () => {
  return <Wave />
}

export default {
  title: 'Components/Wave',
  component: Wave,
}
