'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    hitpoints: DataTypes.STRING,
    stage: DataTypes.STRING,
    id: DataTypes.UUID,
    attackCost: DataTypes.STRING,
    attackName: DataTypes.STRING,
    attackDamage: DataTypes.STRING,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps: false,
  });
  return Pokemon;
};