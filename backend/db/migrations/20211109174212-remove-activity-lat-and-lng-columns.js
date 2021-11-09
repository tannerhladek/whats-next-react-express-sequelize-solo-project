'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Activities', 'lat', { transaction: t }),
        queryInterface.removeColumn('Activities', 'lng', { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Activities', 'lat', {
          type: Sequelize.INTEGER,
          allowNull: false
        }, { transaction: t }),
        queryInterface.addColumn('Activities', 'lng', {
          type: Sequelize.INTEGER,
          allowNull: false
        }, { transaction: t })
      ])
    })
  }
};

