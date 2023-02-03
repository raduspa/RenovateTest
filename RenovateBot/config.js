module.exports = {
  platform: 'azure',
  endpoint: 'https://github.com',
     token: process.env.RENOVATE_TOKEN,
  logLevel: 'debug',
  repositories: ['mihaicozma/RenovateTest'],
  onboarding: false,
  printConfig: true,
  requireConfig: false,
};
