const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    userId: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      default: 'camping',
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
