const { Category } = require('../models');

const createCategory = async (name) => {
const newCategory = await Category.create({ name });
return { type: null, message: newCategory };
};

module.exports = {
  createCategory,
};