const path = require('path');
const HWP = require('html-webpack-plugin');
const appDIR = path.join(__dirname,'client/my-app/source/index.js');
const webpack = require('webpack');
// import css from 'file.css';
console.log(typeof appDIR);



module.exports = {
    mode: 'development',
    entry: [appDIR, 'webpack-hot-middleware/client'],
    output: {
                filename: 'build.js',
                path: path.join(__dirname,'/client/my-app/dist')
            },
    devtool : 'inline-source-map',
    devServer : {
        contentBase: './client/my-app/dist',
        hot:true
    },        
    plugins: [
                
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