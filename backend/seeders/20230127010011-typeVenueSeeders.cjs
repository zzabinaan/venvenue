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
          event_types: "Weddings",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          event_types: "Conference",
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
