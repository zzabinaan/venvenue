"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name: "Garden",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Outdoor Event Space",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: "Auditoriums",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
