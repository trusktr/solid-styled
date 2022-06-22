const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve('.', 'dist'),
		filename: 'js/[name].js',
		publicPath: '/',
		chunkFilename: 'js/[name].js',
		globalObject: "(typeof self !== 'undefined' ? self : this)",
		sourcePrefix: '',
	},
	devServer: {static: 'dist', historyApiFallback: {index: 'index.html'}},
	resolve: {
		alias: {
			'@': __dirname + '/src/',
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		unknownContextCritical: false,
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-solid', '@babel/preset-typescript'],
							// plugins: ['solid-styled-jsx/babel'],
							// plugins: ['babel-plugin-solid-styled'],
						},
					},
				],
			},
			// {
			// 	test: /solid-styled\/dist\/esm\/production\/index.jsx$/,
			// 	use: [{loader: 'babel-loader', options: {presets: ['babel-preset-solid']}}],
			// },
		],
	},

	plugins: [
		// Copies index.html to dist (in dev mode with dev server copies it to memory instead)
		new HtmlPlugin({template: './public/index.html', hash: true}),
	],

	// stats: {errorDetails: true},

	mode: 'development',
}
