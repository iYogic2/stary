module.exports = {
  root: true,
  global: {
    jsx,
    react,
    reactDom
  },
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
    jsx: true,
    useJSXTextNode: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
    semi: ['error', 'always'],
    'no-unused-vars': 'off'
  },
  // ts走下面的解析器
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
      plugins: ['prettier', '@typescript-eslint'],
      rules: {
        semi: ['error', 'always'],
        '@typescript-eslint/no-explicit-any': ['off'],
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off', //非空断言，源码有用
        '@typescript-eslint/no-this-alias': 'off' //是否是无效this的别名，比如：const _this=this
      }
    }
  ]
};
