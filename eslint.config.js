import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'

const dir = fileURLToPath(new URL('.', import.meta.url))

console.log('import.meta.url', import.meta.url)

export default antfu(
  {
    formatters: true,
    ignores: [],
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    rules: {},
  },
)
