const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.userId;
  const newBlogPost = await blogPostService.createBlogPost({ title, content, userId });
  await Promise.all(categoryIds
    .map((category) => blogPostService.createPostCategory({ postId: newBlogPost.id, category })));
  if (newBlogPost.type) { return res.status(newBlogPost.type).json(newBlogPost.message); }
  return res.status(201).json(newBlogPost);
};

module.exports = {
  createBlogPost,
};