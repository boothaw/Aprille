// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Screenprintcopy {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Screenprintcopy from './Screenprintcopy'

export const generated = () => {
  return <Screenprintcopy />
}

export default {
  title: 'Components/Screenprintcopy',
  component: Screenprintcopy,
}
