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
    },
    {
      id: 7,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 8,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 9,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 10,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 11,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 12,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 13,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 14,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 15,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 16,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 17,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 18,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 19,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 20,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 21,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 22,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 23,
      in_out: faker.random.boolean(),
      date: faker.date.between('1983-11-03', '2020-12-31'),
      concept: faker.commerce.productName(),
      mount: faker.commerce.price(20,1000.0),
      category_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 24,
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
