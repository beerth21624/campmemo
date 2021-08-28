const User = require('../models/User');

exports.getUser = async (req, res, next) => {
  res.status(200).json(req.user);
};

exports.getAuthorUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
