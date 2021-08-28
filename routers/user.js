const { getAuthorUser, getUserProfile } = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.route('/author/:id').get(getAuthorUser);
router.route('/userprofile/:id').get(getUserProfile);

module.exports = router;
