console.log("RENOVATE_TOKEN ", process.env.RENOVATE_TOKEN)

module.exports = {
  platform: 'github',
  token: process.env.RENOVATE_TOKEN,
  logLevel: 'debug',
  repositories: ['mihaicozma/RenovateTest'],
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
