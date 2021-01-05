module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.js'
	},
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /(node_modules|bower_components)/,//excluded node_modules 
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]  //Preset used for env setup
					}
				}
			}
		]
	},
	performance: {
		hints: false
	}
}