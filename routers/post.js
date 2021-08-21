const express = require('express');
const router = express.Router();
const {
  createPost,
  getPost,
  getAllPost,
  getNewPost,
  getHeaderPost,
  getProfilePost,
} = require('../controllers/post');

router.route('/').post(createPost).get(getAllPost);
router.route('/:id').get(getPost);
router.route('/new').get(getNewPost);
router.route('/header').get(getHeaderPost);
router.route('/profile/:id').get(getProfilePost);

module.exports = router;
