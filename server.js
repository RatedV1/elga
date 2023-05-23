require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('./models/User');
const crypto = require('crypto');

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
      console.error('Failed to connect to MongoDB:', err.message);
      process.exit(1);
    });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
}

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
},
function(accessToken, refreshToken, profile, done) {
    User.findOne({ discordId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                return done(null, existingUser);
            } else {
                const tempPassword = crypto.randomBytes(15).toString('hex');
                const newUser = new User({
                    discordId: profile.id,
                    username: profile.username,
                    email: profile.email,
                    password: tempPassword
                });

                newUser.save()
                    .then((user) => {
                        // Send tempPassword to user via email.
                        return done(null, user);
                    })
                    .catch((err) => {
                        return done(new Error("Failed to save new user: " + err.message));
                    });
            }
        })
        .catch((err) => {
            return done(new Error("User lookup failed: " + err.message));
        });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      if(err){
          done(new Error("Failed to deserialize an user: " + err.message));
      }else{
          done(null, user);
      }
  });
});

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Authorization Header:', req.header('Authorization'));
  next();
});
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const coachRoutes = require('./routes/coachRoutes');
app.use('/api/coaches', coachRoutes);

const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/coaches/:coachId/services', serviceRoutes);

const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

app.get('/auth/discord', passport.authenticate('discord'));

app.get('/auth/discord/redirect',
    passport.authenticate('discord', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        res.redirect('/') // Or wherever you want the user to go
    }
);

app.get('/', (req, res) => {
  res.send('Hello, EGA!');
});

connectDB();
