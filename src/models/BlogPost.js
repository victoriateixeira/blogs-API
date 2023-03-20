module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
   {
id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, }, 
title: DataTypes.STRING,
content: DataTypes.STRING,
userId: DataTypes.INTEGER,
published: DataTypes.DATE,
updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,

  } );
  BlogPost.associate = (models) => {
    // define o tipo de relacionamento
        BlogPost.belongsTo(models.User,
        // define qual a foreign key a ser criada
          { foreignKey: 'userId', as: 'user' });
      };
 
  return BlogPost;
}