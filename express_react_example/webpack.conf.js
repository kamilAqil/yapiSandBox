const path = require('path');
const HWP = require('html-webpack-plugin');
const appDIR = path.join(__dirname,'client/my-app/source/index.js');
// import css from 'file.css';
console.log(typeof appDIR);



module.exports = {
    entry: appDIR,
    output: {
                filename: 'build.js',
                path: path.join(__dirname,'/client/my-app/dist')
            },
    plugins : [new HWP()],        
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