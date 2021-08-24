const express = require('express');
const router = express.Router();
const { Category } = require('../controllers/category');

router.route('/:catId').get(Category);

module.exports = router;
