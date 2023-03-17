const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
 return res.status(400).json({
    message: '"name" is required',
  }); 
}
const category = await categoryService.createCategory(name);

return res.status(201).json(category.message);
};

const getAllCategories = async (_req, res) => {
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories.message);
};

module.exports = {
  createCategory,
  getAllCategories,
};