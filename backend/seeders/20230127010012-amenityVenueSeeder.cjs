"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "amenities_venue",
      [
        {
          amenityId: 1,
          VenueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amenityId: 2,
          VenueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amenityId: 1,
          VenueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("amenities_venue", null, {});
  },
};
