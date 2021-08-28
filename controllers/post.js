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
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
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
  console.log(req.params.id);
  try {
    const post = await Post.aggregate([
      {
        $match: { userId: req.params.id },
      },
    ]);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
