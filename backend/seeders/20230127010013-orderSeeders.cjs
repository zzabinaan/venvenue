"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          description: "Order for xxx venues",
          order_date: new Date(),
          userId: 1,
          VenueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Order for xxx2 venues",
          order_date: new Date(),
          userId: 1,
          VenueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
