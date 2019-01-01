const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const port = process.env.PORT;
const result = env;
 
if (result.error) {
  throw result.error
}

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });  

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/my-app/public/index.html'));
    
});



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

