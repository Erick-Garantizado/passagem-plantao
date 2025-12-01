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
        foreignKey: 'id_pass'
      })

      this.belongsTo(models.usuarios, {
        as: 'recebedor',
        foreignKey: 'id_receb'
      })
    }

  }
  plantaos.init({
    turno: DataTypes.CHAR,
    id_pass: DataTypes.INTEGER,
    id_receb: DataTypes.INTEGER,
    situacao: DataTypes.BOOLEAN,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plantaos',
  });
  return plantaos;
};