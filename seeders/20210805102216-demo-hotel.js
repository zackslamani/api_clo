'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */Example:
      await queryInterface.bulkInsert('hotels', [{
        name: "Hotel1",
        nb_room: 5,
        address: "22 Rue du Débarcadère, 75017 Paris",
        mobile: 0121222324,
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */Example:
    await queryInterface.bulkDelete('hotels', null, {});
     
  },

  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */Example:
      await queryInterface.bulkInsert('hotels', [{
        name: "Hotel2",
        nb_room: 2,
        address: "58 Bd Victor Hugo, 92200 Neuilly-sur-Seine",
        mobile: 0121222325,
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */Example:
    await queryInterface.bulkDelete('hotels', null, {});
     
  }
};
