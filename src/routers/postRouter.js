const express = require('express');

const { blogPostController } = require('../controllers');
const { validateFieldsExist, validateCategoriesExist } = require('../middlewares/validateBlogPost');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', validateToken, 
validateFieldsExist, 
validateCategoriesExist,
 blogPostController.createBlogPost);
 router.get('/', validateToken, blogPostController.getAllPosts);
 router.get('/:id', validateToken, blogPostController.getPostById);
 router.put('/:id', validateToken, validateFieldsExist, blogPostController.updatePost);
module.exports = router;