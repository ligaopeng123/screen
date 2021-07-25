// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        {
          loader: 'less-loader',
          options: {
            localIdentName: '[local]--[hash:base64:5]',
            javascriptEnabled: true,
            sourceMap: true,
            module: true,
          }
        }]
    });
    return config;
  }
};
