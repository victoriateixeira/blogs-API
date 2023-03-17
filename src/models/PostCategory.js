

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: { type: DataTypes.INTEGER, primaryKey: true}, 
    categoryId: { type: DataTypes.INTEGER, primaryKey: true}, 
    
      },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,

  } );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'categoryId', // se refere a outra chave de `users_books`
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId', // se refere ao id de User na tabela de `users_books`
      otherKey: 'postId',
    });
  };
 
  return PostCategory;
}