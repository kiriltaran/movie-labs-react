module.exports = {
  hooks: {
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'npm run lint',
  },
}
