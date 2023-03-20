const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const newBlogPost = await blogPostService.createBlogPost({ title, content, userId });
  console.log(newBlogPost, 'BLOGPOSTCONTROLLER_NEWBLOGPOST');
  await Promise.all(categoryIds
    .map((categoryId) => blogPostService.createPostCategory({ postId: newBlogPost.id,
       categoryId })));
  return res.status(201).json(newBlogPost);
};

const getAllPosts = async (_req, res) => {
  const blogPosts = await blogPostService.getAllPosts();
  return res.status(200).json(blogPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const blogPostById = await blogPostService.getPostById(id);
  if (!blogPostById) { return res.status(404).json({ message: 'Post does not exist' }); }
  return res.status(200).json(blogPostById);
};
module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
};