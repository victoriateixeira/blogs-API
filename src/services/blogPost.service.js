const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

  const createBlogPost = async ({ title, content, userId }) => {
    const newBlogPost = await BlogPost.create({ userId, 
      title, 
      content,
       updated: Date.now(), 
       published: Date.now() });
    return newBlogPost.dataValues;
  };
  
  const createPostCategory = async ({ postId, categoryId }) => {
    PostCategory.create({ postId, categoryId });
  };
module.exports = {
  createBlogPost,
  createPostCategory,
};