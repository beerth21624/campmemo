const Post = require('../models/Post');
exports.Category = async (req, res) => {
  const pageSize = 9;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * pageSize;

  try {
    const total = await Post.find({
      category: req.params.catId,
    }).countDocuments();
    console.log(total);
    const pages = Math.ceil(total / pageSize);

    const cats = await Post.find({ category: req.params.catId })
      .skip(skip)
      .limit(pageSize);
    res.status(200).json({
      status: 'success',
      count: cats.length,
      page,
      pages,
      data: cats,
    });
  } catch (err) {
    console.log(err);
  }
};
