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

      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1);
    });

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

const coachRoutes = require('./routes/coachRoutes');
app.use('/api/coaches', coachRoutes);

const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);

const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('Hello, EGA!');
});

connectDB();
