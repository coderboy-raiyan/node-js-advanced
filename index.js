const express = require('express');
const cors = require('cors');
const connectDb = require('./mongoDB/connectDb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

// connect with mongoDb function
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
