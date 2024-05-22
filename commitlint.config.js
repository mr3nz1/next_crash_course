module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Modify the 'type' rule
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],

    // Add a new 'subject-case' rule
    'subject-case': [
      2,
      'always',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],

    // Add a new 'subject-max-length' rule
    'subject-max-length': [2, 'always', 50],

    'type(scope)': 'subject',
  },
};
