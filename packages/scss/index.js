module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
    'color-function-notation': null,
    'color-hex-case': 'upper',
    'no-empty-source': null,
    'number-leading-zero': 'never',
    'selector-class-pattern': null,
    'string-quotes': 'single',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-rule'],
        ignore: ['after-comment']
      }
    ]
  }
}
