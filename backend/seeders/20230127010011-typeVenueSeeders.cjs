"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "types_venue",
      [
        {
          typeId: 1,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: 2,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: 1,
          venueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("types_venue", null, {});
  },
};
