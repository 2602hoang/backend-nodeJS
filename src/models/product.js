'use strict';
const {
  Model, HasMany
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Product.hasMany(models.Category, {foreignKey:'category_id',targetKey:'id',as:'cateData'})
      // Product.hasMany(models.U, {foreignKey:'category_id',targetKey:'id',as:'cateData'})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    thumb: DataTypes.STRING,
    qty_sold: DataTypes.INTEGER,
    loca: DataTypes.STRING,
    // id_user: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};