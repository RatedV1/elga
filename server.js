require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

function connectDB() {
  console.log('Connecting to MongoDB...');
  console.log('MongoDB URI:', process.env.MONGO_URI);

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');

      // Further code related to your database connection
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1);
    });

  // Close the MongoDB connection when the Node.js process is terminated
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
}

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Authorization Header:', req.header('Authorization'));
  next();
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const coachingServiceRoutes = require('./routes/coachingServiceRoutes.js');
app.use('/api/coaching-services', coachingServiceRoutes);

const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);

app.get('/', (req, res) => {
  res.send('Hello, EGA!');
});

connectDB();
