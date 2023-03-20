const { BlogPost, User, Category } = require('../models');
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

  const getAllPosts = async () => {
    const blogPostList = await BlogPost.findAll({
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' }],
    });
    return blogPostList;
  };

const getPostById = async (id) => {
  const blogPostById = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' }],
  });
  return blogPostById;
};

module.exports = {
  createBlogPost,
  createPostCategory,
  getAllPosts,
  getPostById,
};