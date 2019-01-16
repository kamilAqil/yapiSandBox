const webpack = require('webpack');
const webpackConfig = require('./webpack.conf.js');
const webpackMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const port = process.env.PORT;
const result = env;


// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date();
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

if (result.error) {
  throw result.error
}



app.use(webpackMiddleware(compiler, {
  noInfo: false, 
  publicPath: path.join(__dirname,'./client/my-app/dist/index.html')
}));



// server the static files from react build 
app.use(express.static(path.join(__dirname,'/client/my-app/dist')));


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });  



// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/my-app/dist/index.html'));
    
});



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port} and restarted at time ${formattedTime}`));

