'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Task', 'description')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Task', 'description', {
      type: Sequelize.STRING,
      allowNull: false
    })
  }
};
