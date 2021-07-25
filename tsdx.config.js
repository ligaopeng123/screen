const postcss = require('rollup-plugin-postcss');

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			postcss({
				inject: true, // 是否主动注入css到js中(设置为true,则在引用组件的时候,就无需再单独引入css了)
				modules: true, // 使用css modules
				camelCase: true, // 支持驼峰
				extract: !!options.writeMeta, //
				css: true,
				less: true, // 是否使用less,
				// sass: false, // 是否使用sass
			}),
		);
		// 截至2021年3月: 必须使用 unshift 添加 image 插件, 否则报错
		// config.plugins.unshift(image());
		return config;
	},
};