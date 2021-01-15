'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      name: 'Comida',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name:'Hospedaje',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      name:'Viaticos',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
