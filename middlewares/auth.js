const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from header
  const authHeader = req.header('Authorization');

  // Check if not token
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1]; // split "Bearer" from "Bearer {token}"

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded token:', decoded);

    if (!decoded.user || !decoded.user.id) {
      return res.status(401).json({ msg: 'Invalid user information in token' });
    }

    req.user = decoded.user;
    console.log('User object:', req.user);

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
