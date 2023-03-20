const { Category } = require('../models');

const validateFieldsExist = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
      return res.status(400)
      .json({ message: 'Some required fields are missing' }); 
     }

return next();
};

const validateCategoriesExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  const verifyCat = await Promise.all(categoryIds.map((category) => Category.findByPk(category)));
  const isCat = verifyCat.some((cat) => !cat);
  
  if (isCat) { return res.status(400).json({ message: 'one or more "categoryIds" not found' }); }
  return next();
};

module.exports = {
  validateFieldsExist,
  validateCategoriesExist,
};