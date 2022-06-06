module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-html'
  ],
  // 针对后缀为这些文件的使用postcss-scss格式化
  overrides: [
    {
      files: ['*.sass', '*.scss', '**/*.sass', '**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'function-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null
    // "stylus/at-extend-style": ["@extend"],
    // "stylus/declaration-colon": ["always"],
    // "stylus/hash-object-property-comma": [
    //   "always",
    //   {
    //     trailing: "never",
    //   },
    // ],
    // "stylus/indentation": 2,
    // indentation: null,
    // "stylus/media-feature-colon": ["always"],
    // "stylus/no-at-require": [true],
    // "stylus/pythonic": [
    //   "never",
    //   {
    //     atblock: "never",
    //   },
    // ],
    // "stylus/selector-list-comma": ["always"],
    // "stylus/semicolon": ["always"],
    // "stylus/single-line-comment": ["never"],
  },
  defaultSeverity: 'warning'
}
