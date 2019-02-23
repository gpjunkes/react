//const path = require('path');

module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
        //path: path.resolve(__dirname, 'public')        
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presents: ['react']
            }
        }]
    }
}