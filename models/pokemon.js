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
    hitpoints: DataTypes.INTEGER,
    stage: DataTypes.STRING,
    attackcost: DataTypes.INTEGER,
    attackname: DataTypes.STRING,
    attackdamage: DataTypes.INTEGER,
    attackcost2: DataTypes.STRING,
    attackname2: DataTypes.STRING,
    attackdamage2: DataTypes.INTEGER,
    weakness: DataTypes.STRING,
    resistance: DataTypes.STRING,
    retreat: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps: false,
  });
  return Pokemon;
};