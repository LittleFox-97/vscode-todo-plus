// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: false,
    svelte: false,
    jsx: false,
    markdown: false,
    vue: false,
    yaml: false,
    react: false,
    typescript: {
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    files: ['src/**/*.ts'],
    stylistic: true,
    jsonc: true,
  },
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'curly': ['error', 'all'],
      'no-console': 'warn',
      'complexity': ['error', 10],
      'func-style': ['error', 'declaration'],
      'style/padding-line-between-statements': ['error', { blankLine: 'always', prev: ['function', 'type', 'interface'], next: '*' }],
      'node/prefer-global/buffer': ['error', 'always'],
      'node/prefer-global/process': ['error', 'always'],
    },
  },
)
