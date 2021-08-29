const {
  getAuthorUser,
  getUserProfile,
  updateUser,
} = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.route('/author/:id').get(getAuthorUser);
router.route('/userprofile/:id').get(getUserProfile);
router.route('/updateUser/:id').put(updateUser);

module.exports = router;
