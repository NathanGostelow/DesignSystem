const customWebpack = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs'
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: customWebpack.resolve.alias }
    };
  }
};
