module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react|react-dom)$',
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '@/(.*)',
    '^[./]',
    '/.module/.scss$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
}
