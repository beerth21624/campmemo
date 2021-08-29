const express = require('express');
const router = express.Router();
const {
  createPost,
  getPost,
  getAllPost,
  getNewPost,
  getHeaderPost,
  getProfilePost,
  deletePost,
  updatePost,
} = require('../controllers/post');

router.route('/').post(createPost).get(getAllPost);
router.route('/new').get(getNewPost);
router.route('/header').get(getHeaderPost);
router.route('/profile/:id').get(getProfilePost);
router.route('/update/:id').put(updatePost);
router.route('/delete/:id').delete(deletePost);
router.route('/:id').get(getPost);

module.exports = router;
