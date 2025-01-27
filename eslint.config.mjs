import myapp from '@theshop/eslint-config'

export default [
    {
        ignores: ['**/dist/**'],
    },
    ...myapp.configs.node,
    ...myapp.configs.typescript,
    ...myapp.configs.strict,
    {
        rules: {
            'unicorn/prefer-module': 'off',
            'unicorn/prevent-abbreviations': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            'sonarjs/no-nested-conditional': 'off',
        },
    },
]
