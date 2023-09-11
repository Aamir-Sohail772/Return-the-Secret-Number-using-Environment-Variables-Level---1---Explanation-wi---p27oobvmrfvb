const express = require('express');
const app = express();
const dotenv = require('dotenv'); // Import the dotenv library

// Load environment variables from .env
dotenv.config();

app.use(express.json());

// Implement a GET route to return the value stored in the NUMBER variable from .env
app.get('/api/get-env', (req, res) => {
  // Retrieve the secret number from the environment variables
  const secretNumber = process.env.NUMBER;

  // Check if the secret number exists in the environment variables
  if (secretNumber === undefined) {
    res.status(404).json({ err: 'Not Found' });
  } else {
    res.status(200).json({ number: secretNumber });
  }
});

module.exports = app;










// const express = require('express');
// const app = express();
// app.use(express.json());

// // Write a GET route to return the value stored in the NUMBER variable stored in the .env file
// /*
// {
//     "number" : "2"
// }
// */
// app.get('/api/get-env', (req, res) => {
//    //Write your code here
// });

// module.exports = app;
