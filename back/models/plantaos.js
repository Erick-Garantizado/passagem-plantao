'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plantaos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.usuarios, {
        as: 'plantonista',
        foreignKey: 'mat_pass'
      })
    }
  }
  plantaos.init({
    turno: DataTypes.CHAR,
    mat_pass: DataTypes.INTEGER,
    mat_receb: DataTypes.INTEGER,
    situacao: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plantaos',
  });
  return plantaos;
};