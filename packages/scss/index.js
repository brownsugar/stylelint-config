/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
  ],
  rules: {
    // General rules
    'alpha-value-notation': 'number',
    'declaration-property-value-no-unknown': true,
    'no-empty-source': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-rule'],
        ignore: ['after-comment'],
      },
    ],
    'selector-class-pattern': null,
    // SCSS rules
    'scss/double-slash-comment-empty-line-before': null,
    // Stylistic rules
    '@stylistic/number-leading-zero': 'never',
    '@stylistic/string-quotes': 'single',
  },
}
