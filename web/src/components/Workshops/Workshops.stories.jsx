// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Workshops {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Workshops from './Workshops'

export const generated = () => {
  return <Workshops />
}

export default {
  title: 'Components/Workshops',
  component: Workshops,
}
