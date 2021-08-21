const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    data: {
      type: Array,
    },
    photo: {
      type: String,
      require: false,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CreatePost', PostSchema);
