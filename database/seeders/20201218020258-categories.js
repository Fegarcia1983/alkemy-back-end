'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      name: 'Food',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name:'Hotel',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      name:'Taxi',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
