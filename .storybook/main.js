const path = require("path");
module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	// https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
	typescript: {
		check: true, // type-check stories during Storybook build
	},
	webpackFinal: async (config, {configType}) => {
		config.module.rules.push({
			test: /\.less$/,
			exclude: /\.module\.less$/,
			sideEffects: true,
			include: path.resolve(__dirname, '../src'),
			use: [
				'style-loader',
				"css-loader",
				'less-loader',
			]
		}, {
			test: /\.module\.less$/,
			sideEffects: true,
			include: path.resolve(__dirname, '../src'),
			use: [
				'style-loader',
				"css-loader?modules",
				{
					loader: 'less-loader',
					options: {
						sourceMap: true,
						lessOptions: {
							localIdentName: '[local]--[hash:base64:5]',
							javascriptEnabled: true,
							importLoaders: 3,
							module: true,
						}
						
					}
				}]
		});
		return config;
	}
};
