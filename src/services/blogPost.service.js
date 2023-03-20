const { BlogPost, User, Category } = require('../models');
const { PostCategory } = require('../models');
const { verifiesPostOwnership } = require('./validations/varifiesPostOwnership');

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
  if (!blogPostById) { return { type: 404, message: { message: 'Post does not exist' } }; }
  return { type: 200, message: blogPostById };
};

const updatePost = async (title, content, id, userId) => {
const postData = await getPostById(id);
if (postData.type === 404) { return postData; }
const ownerId = postData.message.userId;
const ownershipError = verifiesPostOwnership(ownerId, userId);
if (ownershipError.type) { return ownershipError; }
await BlogPost.update({
  title,
  content,
}, 
{ where: { id } });
const updatedPost = await getPostById(id);
return { type: 200, message: updatedPost.message };
};

const deletePost = async (id, userId) => {
const postData = await getPostById(id);
console.log(postData.message.userId, 'DELETEPOST_POSTDATA');
if (postData.type === 404) { return postData; }
const ownerId = postData.message.userId;
console.log(ownerId, 'DELETEPOST_OWNERID');
const ownershipError = verifiesPostOwnership(ownerId, userId);
if (ownershipError.type) { return ownershipError; }
  await BlogPost.destroy({
    where: { id },
  });

  return { type: 204, message: '' };
};
module.exports = {
  createBlogPost,
  createPostCategory,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};