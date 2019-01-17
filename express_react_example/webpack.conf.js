const path = require('path');
const HWP = require('html-webpack-plugin');

const appDIR = path.join(__dirname,'client/my-app/source/index.js');
const webpack = require('webpack');
// import css from 'file.css';
console.log(typeof appDIR);
console.log(appDIR);


module.exports = {
    entry: [path.join(__dirname, 'client/my-app/source/index.js')],
    output: {
                filename: 'build.js',
                path: path.join(__dirname,'/client/my-app/dist')
            },
    plugins: [
                // // OccurrenceOrderPlugin is needed for webpack 1.x only
                //     new webpack.optimize.OccurrenceOrderPlugin(),
                //     new webpack.HotModuleReplacementPlugin(),
                // // Use NoErrorsPlugin for webpack 1.x
                //     new webpack.NoEmitOnErrorsPlugin(),
                    
               
    ],  
    devServer: {
        contentBase:  path.join(__dirname, './client/my-app/dist'),
        compress: true,
        proxy: {
            "/api": "http://localhost:9000/api"
        },
        port: '5005',
        watchContentBase: true,
    },              
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