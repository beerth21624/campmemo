const Post = require('../models/Post');

//create post
exports.createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
      photo: req.body.photo,
      userId: req.body.userId,
      category: req.body.category,
      author: req.body.author,
      authorPic: req.body.authorPic,
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//getpost
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all post
exports.getAllPost = async (req, res, next) => {
  const pageSize = 10;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * pageSize;
  try {
    const total = await Post.countDocuments();
    const pages = Math.ceil(total / pageSize);

    const results = await Post.find().skip(skip).limit(pageSize);
    res.status(200).json({
      status: 'success',
      count: results.length,
      page,
      pages,
      data: results,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//get new post(5)
exports.getNewPost = async (req, res, next) => {
  try {
    const Posts = await Post.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json(Posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get header post(2)
exports.getHeaderPost = async (req, res, next) => {
  try {
    const Posts = await Post.aggregate([
      {
        $sample: {
          size: 2,
        },
      },
    ]);
    res.status(200).json(Posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get profile post
exports.getProfilePost = async (req, res, next) => {
  const limits = parseInt(req.query.limit);
  try {
    const post = await Post.find({ userId: req.params.id }).limit(limits);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//updatepost

exports.updatePost = async (req, res) => {
  try {
    const update = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
};

//deletepost

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json('deleted');
  } catch (err) {
    res.status(500).json(err);
  }
};
