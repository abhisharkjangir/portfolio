import loadable from '@loadable/component'

export default loadable(() =>
  // eslint-disable-next-line extra-rules/no-commented-out-code
  import(/* webpackChunkName: "menu-async" */ './menu')
)
