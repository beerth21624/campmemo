const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.validateToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res
      .status(401)
      .json({ success: false, error: 'Not authorized to access this route' });
  }

  try {
    const validate = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(validate.id);

    if (!user) {
      res.status(404).json({ success: false, error: 'No user found this id' });
    }

    req.user = user;

    next();
  } catch (err) {
    res
      .status(401)
      .json({ success: false, error: 'Not authorized to access this route' });
  }
};
