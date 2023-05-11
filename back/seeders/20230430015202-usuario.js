'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    Example:
    await queryInterface.bulkInsert('usuarios', [{
      nome: 'Teste',
      funcao: 'Tester',
      matricula: 1000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Erick',
      funcao: 'Assistente de TI',
      matricula: 2129,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example: */
     await queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
