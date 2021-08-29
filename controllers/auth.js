const User = require('../models/User');
// const ErrorResponse = require('../middleware/error');

exports.register = async (req, res, next) => {
  const { nameAuthor, username, email, password } = req.body;

  const validateUser = await User.findOne({ email });
  console.log(validateUser);
  validateUser && res.status(403).json('You have an account , please Login!');

  try {
    const user = await User.create({
      nameAuthor,
      username,
      email,
      password,
    });

    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token });
  } catch (err) {
    res.status(500).err({ success: false, error: err.message });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: 'please provide email and password' });
  }
  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      res.status(404).json({ success: false, error: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: 'Invalid credentials' });
    }
    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// exports.forgotpassword = async (req, res, next) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       res
//         .status(404)
//         .json({ success: false, error: 'Email could not be sent' });
//     }
//     const resetToken = user.getResetPasswordToken();

//     await user.save();

//     const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

//     // HTML Message
//     const message = `
//       <h1>You have requested a password reset</h1>
//       <p>Please make a put request to the following link:</p>
//       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//     `;
//   } catch (err) {}
// };
// exports.resetpassword = (req, res, next) => {};
