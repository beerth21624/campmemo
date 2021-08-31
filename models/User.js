const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    nameAuthor: {
      type: String,
      require: [true, 'please enter name'],
    },
    username: {
      type: String,
      require: [true, 'please enter username'],
    },
    email: {
      type: String,
      require: [true, 'please enter email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      require: [true, 'please enter password'],
      minlength: [8, 'Please enter password more than 8 characters'],
      select: false,
    },
    profileDesc: {
      type: String,
      default: '',
    },
    profilePic: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLudNg5O7N1-IL_vX3c9i5hoY-gwNojCAXfkcWkKb5a9RsEzkRqKji4P0GN5NS0VJH85M&usqp=CAU',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model('User', UserSchema);
