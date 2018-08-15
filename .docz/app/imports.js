export const imports = {
  'test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "test" */ 'test.mdx'),
  'components/buttons.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-buttons" */ 'components/buttons.mdx'),
}
