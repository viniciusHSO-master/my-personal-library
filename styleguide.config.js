const path = require('path');
module.exports = {
    components: 'src/components/**/*.js',
    webpackConfig: {
        
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        }
    },
};