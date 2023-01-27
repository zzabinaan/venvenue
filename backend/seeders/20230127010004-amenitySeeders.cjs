"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "amenities",
      [
        {
          amenity: "wifi",
          icon: "wifi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amenity: "stage",
          icon: "stage",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("amenities", null, {});
  },
};
