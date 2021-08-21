const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Category', CategorySchema);
