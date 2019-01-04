const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const port = process.env.PORT;
const result = env;
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.conf'));
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
function createWebpackDevMiddleware() {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: compiler.publicPath,
    silent: true,
    stats: 'errors-only',
  });
}


  
  

  // 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());






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



// app.use(require("webpack-dev-middleware")(compiler, {
//   noInfo: true, publicPath: path.join(__dirname,'./client/my-app/dist')
// }));



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

