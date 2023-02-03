console.log("RENOVATE_TOKEN1 ", process.env.RENOVATE_TOKEN1)
console.log("RENOVATE_TOKEN ", process.env.RENOVATE_TOKEN)

module.exports = {
  platform: 'github',
  token: process.env.RENOVATE_TOKEN1,
  logLevel: 'debug',
  repositories: ['mihaicozma/RenovateTest'],
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
