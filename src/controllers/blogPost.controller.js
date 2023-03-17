const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds, userId } = req.body;
  const newBlogPost = await blogPostService.createBlogPost({ title, content, categoryIds, userId });
  if (newBlogPost.type) { return res.status(newBlogPost.type).json(newBlogPost.message); }
  return res.status(201).json(newBlogPost.message);
};

module.exports = {
  createBlogPost,
};