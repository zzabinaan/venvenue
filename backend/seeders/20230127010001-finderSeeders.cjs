"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "finders",
      [
        {
          full_name: "Zabina Anastasya",
          date_of_birth: "2002-12-30",
          phone_number: "085655075925",
          profile_picture: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          full_name: "Tian Gusti",
          date_of_birth: "1995-02-30",
          phone_number: "085655075925",
          profile_picture: null,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("finders", null, {});
  },
};
