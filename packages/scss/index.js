module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
    'color-function-notation': null,
    'declaration-property-value-no-unknown': true,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-rule'],
        ignore: ['after-comment'],
      },
    ],
  },
}
