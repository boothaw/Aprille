// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AboutCopy {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AboutCopy from './AboutCopy'

export const generated = () => {
  return <AboutCopy />
}

export default {
  title: 'Components/AboutCopy',
  component: AboutCopy,
}
