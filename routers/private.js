const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/auth');
const { getUser } = require('../controllers/user');

router.route('/getuser').get(validateToken, getUser);
module.exports = router;
