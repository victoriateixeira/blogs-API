/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} sequelize.DataTypes
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
id: {
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
  type: Sequelize.INTEGER,
},
name: {
  allowNull: false,
  type: Sequelize.STRING,
},
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};
