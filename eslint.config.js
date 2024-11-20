import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [],
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
)
