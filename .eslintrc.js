module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ]
  }
}
