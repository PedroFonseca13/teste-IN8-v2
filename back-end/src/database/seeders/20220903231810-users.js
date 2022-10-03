'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Pedro Fonseca',
        email: 'pedro@fonseca.com',
        bday: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone: '31971680891',
        // created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        name: 'Pedro Henrique',
        email: 'pedro@Henrique.com',
        bday: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone: '31971680891',
        // created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        name: 'Pedro Fonseca',
        email: 'pedro@pedro.com',
        bday: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone: '31971680891',
        // created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ]
  ),

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
