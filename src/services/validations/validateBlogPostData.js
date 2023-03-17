const { Category } = require('../../models');

const validateFieldsExist = ({ title, content, categoryIds }) => {
  if (!title || !content || !categoryIds) {
 return { type: 400, message: 'Some required fields are missing' }; 
}
return { type: null, message: '' };
};

const validateCategoriesExist = (categories) => {
  const categ = categories.map((category) => Category.findByPk(category)).some((cat) => !cat);
  if (categ) { return { type: 400, message: 'one or more "categoryIds" not found' }; }
  return { type: null, message: '' };
};

module.exports = {
  validateFieldsExist,
  validateCategoriesExist,
};