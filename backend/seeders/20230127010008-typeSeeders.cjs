"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "types",
      [
        {
          event_types: "Birthday",
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
    await queryInterface.bulkDelete("types", null, {});
  },
};
