module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
}
