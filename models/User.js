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
      minlength: [8, 'Please enter password more than 6 characters'],
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
  // if (!this.isModified('password')) {
  //   next();
  // }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // next();
});

UserSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// UserSchema.methods.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString('hex'); //เป็นการสร้างข้อทูลแบบสุ่มจะส่งคืนเป็นบัฟเฟอร์จึงต้องแปลงโดยใช้tostring(hex)คือแปงเป็นเลขฐาน16(0-9) A B C D F
//   this.resetPasswordToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
//   return resetToken;
// };

module.exports = mongoose.model('User', UserSchema);
