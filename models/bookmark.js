'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' })
      // this.Login = this.belongsTo(models.Login)
    }
  };
  Bookmark.init({
    url: DataTypes.STRING,
    categories: DataTypes.STRING,
    LoginId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};