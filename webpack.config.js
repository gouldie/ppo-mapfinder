module.exports = {
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
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']

				}
			}]
		}],

    }
};