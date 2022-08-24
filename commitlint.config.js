// https://commitlint.js.org/#/reference-configuration
// cli：`commitlint --config commitlint.config.js`
// @commitlint/config-conventional: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
    ],
    'subject-case': [0] //首字母强制小写关闭
  }
};
