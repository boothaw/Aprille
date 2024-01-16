// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ArticleThumb {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ArticleThumb from './ArticleThumb'

export const generated = () => {
  return <ArticleThumb />
}

export default {
  title: 'Components/ArticleThumb',
  component: ArticleThumb,
}
