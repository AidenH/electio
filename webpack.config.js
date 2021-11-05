const path = require("path")
const webpack = require("webpack")

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset',
			}
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts"],
		fallback: {
			"os": require.resolve("os-browserify/browser"),
			"https": require.resolve("https-browserify"),
			"http": require.resolve("stream-http"),
			"crypto": require.resolve("crypto-browserify"),
			"stream": require.resolve("stream-browserify"),
			"buffer": require.resolve("buffer"),
		},
		alias: { 'react-dom': '@hot-loader/react-dom' },
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		static: path.join(__dirname, "src/components/"),
		port: 3000,
		allowedHosts: 'auto'
	},
	devtool: "source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			Buffer: ['buffer', 'Buffer'],
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser'
		}),
	]
};
