const Post = require('../models/Post');
exports.Category = async (req, res, next) => {
  console.log(req.params);
  try {
    const cats = await Post.aggregate([
      { $match: { category: req.params.catId } },
    ]);
    res.status(201).json(cats);
  } catch (err) {
    console.log(err);
  }
};
