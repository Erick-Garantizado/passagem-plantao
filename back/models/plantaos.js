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
      
    }
  }
  plantaos.init({
    turno: DataTypes.CHAR,
    mat_pass: DataTypes.INTEGER,
    mat_receb: DataTypes.INTEGER,
    data: DataTypes.DATE,
    celular: DataTypes.INTEGER,
    fone: DataTypes.INTEGER,
    tablet: DataTypes.INTEGER,
    roteador: DataTypes.INTEGER,
    toner_pb: DataTypes.INTEGER,
    toner_colorido: DataTypes.INTEGER,
    caixa_ferramentas: DataTypes.INTEGER,
    webcam: DataTypes.INTEGER,
    unidade_imagem: DataTypes.INTEGER,
    suporte_tablet: DataTypes.INTEGER,
    mouse: DataTypes.INTEGER,
    notebook: DataTypes.INTEGER,
    gabinete: DataTypes.INTEGER,
    caixa_cabos: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plantaos',
  });
  return plantaos;
};