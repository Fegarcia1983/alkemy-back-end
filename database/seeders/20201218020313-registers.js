'use strict';
const faker =require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('registers', [{
      id: 1,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 4,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 5,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 6,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('registers', null, {});

  }
};
