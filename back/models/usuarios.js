'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.plantaos, {
        
        foreignKey: 'id'
      })
    }
  }
  usuarios.init({
    nome: DataTypes.STRING,
    funcao: DataTypes.STRING,
    matricula: DataTypes.INTEGER,
    email: DataTypes.STRING,
    permissao: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};