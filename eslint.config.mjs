import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  jsonc: true,
  vue: false,
  astro: false,
}, {
  files: ['src/**/*.ts'],
  rules: {
    'no-console': 'warn',
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
    'complexity': ['warn', 8],
    'ts/switch-exhaustiveness-check': [
      'error',
      {
        considerDefaultExhaustiveForUnions: true,
      },
    ],
    'ts/method-signature-style': [
      'error',
      'method',
    ],
    'node/prefer-global/buffer': ['error', 'always'],
    'style/quote-props': 'off',
    'ts/strict-boolean-expressions': 'off',
  },
})
