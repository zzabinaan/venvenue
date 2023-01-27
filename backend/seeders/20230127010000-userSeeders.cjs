"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "jefuejrgueughj",
          username: "zzabinaan",
          email: "zabinaan@gmail.com",
          password: "12345",
          role: "finder",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "jefuejrgueseyrwrughj",
          username: "tiantian",
          email: "tiantian@gmail.com",
          password: "12345",
          role: "finder",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "jefuejrgueseyrwrughj",
          username: "gardenAdel",
          email: "gardenAdel@gmail.com",
          password: "12345",
          role: "vendor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: "jefuejrtwgueseyrwrughj",
          username: "auditoriumSurabaya",
          email: "auditoriumSurabaya@gmail.com",
          password: "12345",
          role: "vendor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
