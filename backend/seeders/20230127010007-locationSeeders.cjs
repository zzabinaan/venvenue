"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          city: "Surabya",
          district: "Benowo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Surabya",
          district: "Dukuh Pakis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Surabya",
          district: "Gayungan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
