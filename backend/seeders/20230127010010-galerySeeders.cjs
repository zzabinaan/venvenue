"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "galeries",
      [
        {
          picture: "front.png",
          description: "This is Front of the venue",
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          picture: "back.png",
          description: "This is back of the venue",
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          picture: "front2.png",
          description: "This is Front2 of the venue",
          venueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          picture: "back2.png",
          description: "This is back2 of the venue",
          venueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("galeries", null, {});
  },
};
