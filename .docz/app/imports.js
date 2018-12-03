export const imports = {
  'document/test/test b.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "document-test-test-b" */ 'document/test/test b.md'),
  'document/test/中文.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "document-test" */ 'document/test/中文.md'),
}
