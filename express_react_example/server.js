const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT;

const result = env;
 
if (result.error) {
  throw result.error
}
 

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});  