require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, EGA!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
