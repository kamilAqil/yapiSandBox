const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: 'client/my-app/src/index.js',
    output: {
        filename: 'build.js',
        path: path.join(__dirname,'/client/my-app/dist')
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader:"babel-loader"}
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]
    }
}