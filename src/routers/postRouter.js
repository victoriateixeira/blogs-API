const express = require('express');

const { blogPostController } = require('../controllers');
const { validateFieldsExist, validateCategoriesExist } = require('../middlewares/validateBlogPost');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', validateToken, 
validateFieldsExist, 
validateCategoriesExist,
 blogPostController.createBlogPost);
module.exports = router;