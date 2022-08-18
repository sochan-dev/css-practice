const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',

        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/utils/reset.scss'),
              path.resolve(__dirname, '../src/home/utils/_variables.scss'),
              path.resolve(__dirname, '../src/exercise1/utils/_variables.scss'),
              path.resolve(__dirname, '../src/exercise2/utils/_variables.scss'),
              path.resolve(__dirname, '../src/exercise3/utils/_variables.scss'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../public'],
};
