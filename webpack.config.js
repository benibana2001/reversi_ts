const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	// entry: './src/test_stone.ts',
	entry: {
		index: './src/index.ts',
		test_resource: './src/test_resource.ts',
		test_stone: './src/test_stone.ts'
	},

	output: {
		// filename: 'main.js',
		// path: path.resolve(__dirname, 'dist')
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin(
			{
				template: './src/html/index.html',
				chunks: ['index']
			}
		),
		new HtmlWebpackPlugin(
			{
				filename: 'test_resource.html',
				template: './src/html/index.html',
				chunks: ['test_resource']
			}
		),
		new HtmlWebpackPlugin(
			{
				filename: 'test_stone.html',
				template: './src/html/index.html',
				chunks: ['test_stone']
			}
		)
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							url: false,
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.html$/,
				include: [path.resolve(__dirname, 'src')],
				loader: "html-loader"
			},
			{
				// test: /\.(png|svg|jpg|gif)$/,
				test: /\.jpg$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						loader: 'file-loader',
						options: {
							// limit: 20000,
							name: '[name].[ext]'
						}
					}
					// {
					// 	loader: 'url-loader',
					// }
				],
			},
			{
				test: /\.mp3$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}

					}
				],
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};
