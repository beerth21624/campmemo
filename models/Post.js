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
    },
    userId: {
      type: String,
      require: true,
    },
    category: {
      type: String,
    },
    author: {
      type: String,
    },
    authorPic: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
