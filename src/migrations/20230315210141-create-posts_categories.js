/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
return queryInterface.createTable('posts_categories', {
  postId: {
    type: Sequelize.INTEGER,
    field: 'post_id',
    references: {
      model: 'blog_posts',
      key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  primaryKey: true,
}, 
  categoryId: {
    type: Sequelize.INTEGER,
    field: 'category_id',
    references: {
      model: 'categories',
      key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  primaryKey: true,
}, 
  });
  },

  down: async (queryInterface, Sequelize) => {
return queryInterface.dropTable('posts_categories')
  }
};
