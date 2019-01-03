const path = require('path');
const HWP = require('html-webpack-plugin');
const appDIR = path.join(__dirname,'client/my-app/source/index.js');
console.log(typeof appDIR);



module.exports = {
    entry: appDIR,
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
                        }
                       
                    ]
        },
    plugins : [new HWP()]    
}