'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plantaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      turno: {
        type: Sequelize.CHAR
      },
      mat_pass: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        },
      },
      mat_receb: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        },
      },
      data: {
        type: Sequelize.DATE
      },
      celular: {
        type: Sequelize.INTEGER
      },
      fone: {
        type: Sequelize.INTEGER
      },
      tablet: {
        type: Sequelize.INTEGER
      },
      roteador: {
        type: Sequelize.INTEGER
      },
      toner_pb: {
        type: Sequelize.INTEGER
      },
      toner_colorido: {
        type: Sequelize.INTEGER
      },
      caixa_ferramentas: {
        type: Sequelize.INTEGER
      },
      webcam: {
        type: Sequelize.INTEGER
      },
      unidade_imagem: {
        type: Sequelize.INTEGER
      },
      suporte_tablet: {
        type: Sequelize.INTEGER
      },
      mouse: {
        type: Sequelize.INTEGER
      },
      notebook: {
        type: Sequelize.INTEGER
      },
      gabinete: {
        type: Sequelize.INTEGER
      },
      caixa_cabos: {
        type: Sequelize.INTEGER
      },
      observacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plantaos');
  }
};