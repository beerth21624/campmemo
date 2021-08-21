const express = require('express');
const router = express.Router();
const { validate } = require('../middleware/auth');

// router.route('/').get(validate,........)
module.exports = router;
