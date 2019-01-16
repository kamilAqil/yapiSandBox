const path = require('path');
const HWP = require('html-webpack-plugin');
const appDIR = path.join(__dirname,'client/my-app/source/index.js');
const webpack = require('webpack');
// import css from 'file.css';
console.log(typeof appDIR);
console.log(appDIR);


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'client/dist/index.html'),
        compress: true,
        port: 9000
    },
    entry: [appDIR, 'webpack-hot-middleware/client'],
    output: {
                filename: 'build.js',
                path: path.join(__dirname,'/client/my-app/dist')
            },
    plugins: [
                // OccurrenceOrderPlugin is needed for webpack 1.x only
                    new webpack.optimize.OccurrenceOrderPlugin(),
                    new webpack.HotModuleReplacementPlugin(),
                // Use NoErrorsPlugin for webpack 1.x
                    new webpack.NoEmitOnErrorsPlugin()
    ],                
    module : {
            rules : [
                        {
                            test: /\.jsx$|.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader:"babel-loader"
                            }
                        },
                        {
                            test:/\.css$/,
                            exclude: /node_modules/,
                            use: ["style-loader",'css-loader']
                        },
                        {
                            test: /\.svg$/,
                            loader: 'svg-inline-loader'
                        },
                        {
                            test: /\.(html)$/,
                            exclude: /node_modules/,
                            use: {
                              loader: 'html-loader',
                              options: {
                                attrs: [':data-src']
                              }
                            }
                          }
                       
                    ]
        }
       
}