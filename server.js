require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

function connectDB() {
  MongoClient.connect(process.env.MONGO_URI, (err, client) => {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1);
    }
    console.log('Connected to MongoDB');
    // Further code related to your database connection
  });
}

connectDB();

app.use(helmet());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, EGA!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
