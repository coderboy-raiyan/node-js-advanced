const express = require('express');
const connectDb = require('./mongoDB/connectDb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
