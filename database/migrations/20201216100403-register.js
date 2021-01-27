'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registers',
    {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      in_out : {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      concept: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      amount: {
        type: Sequelize.DOUBLE.UNSIGNED,
        allowNull: false
      },
      category_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: `categories`,
          key: `id`
        },
        onUpdate: `cascade`,
        onDelete: `cascade`
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('registers');

  }
};
