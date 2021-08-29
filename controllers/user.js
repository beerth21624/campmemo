const User = require('../models/User');

exports.getUser = async (req, res) => {
  res.status(200).json(req.user);
};

exports.getAuthorUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//ubdateuser
exports.updateUser = async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          profilePic: req.body.image,
          nameAuthor: req.body.nameAuthor,
          profileDesc: req.body.profileDesc,
        },
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch {}
};
