const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyFilePlugin = require('webpack-copy-file-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const tsConfig = require('./tsconfig.json')

module.exports = {
	mode: 'production', // production or development
	entry: {
		'ajanuw-duration': path.resolve(__dirname, 'src/index.ts')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {
		minimizer: [new TerserJSPlugin({})],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyFilePlugin([
			'./README.md',
			'./LICENSE',
			'./.gitignore',
			'./package.json'
		].map(f => path.resolve(__dirname, f)))
	],
	output: {
		library: "AjanuwDuration",
		libraryTarget: 'umd',
		globalObject: "this",
		filename: '[name].js',
		path: path.resolve(__dirname, tsConfig.compilerOptions.outDir),

	},
};