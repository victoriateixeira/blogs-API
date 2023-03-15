/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
return queryInterface.createTable('blog_posts', {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  title: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  content: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references:{
      model: 'users',
      key: 'id',
    }
  },
  published: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updated: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('blog_posts');
  }
};
