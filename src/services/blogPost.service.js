const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { BlogPost } = require('../models');
const PostCategory = require('../models/PostCategory');
const { validateFieldsExist, 
  validateCategoriesExist } = require('./validations/validateBlogPostData');

const createBlogPost = async ({ title, content, categoryIds }) => {
  const errorFields = validateFieldsExist({ title, content, categoryIds });
  if (errorFields.type) { return errorFields; }
  const errorCats = validateCategoriesExist(categoryIds);
  if (errorCats.type) { return errorCats; }
  const result = await sequelize.transaction(async (t) => {
  const newBlogPost = BlogPost.create({ title, content }, { transaction: t });
const { id } = newBlogPost;
 categoryIds.forEach(async (category) => PostCategory.create({ id, category }, { transaction: t }));
  return { type: null, message: newBlogPost };
});

  return result;
  // Se chegou até aqui é porque as operações foram concluídas com sucesso,
  // não sendo necessário finalizar a transação manualmente.
  // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
};

module.exports = {
  createBlogPost,
};