const express = require('express');

const { blogPostController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', validateToken, blogPostController.createBlogPost);
module.exports = router;