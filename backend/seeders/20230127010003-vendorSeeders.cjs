"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vendors",
      [
        {
          name: "Adelia Garden",
          address: "Bintang Alam Blok F no 14 B,Surabaya,41361,Indonesiaa",
          phone_number: "085655075925",
          website: "www.adeliagarden1001@com",
          profile_picture: null,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Great Auditorium Surabaya",
          address:
            "Jl Letjen TB Simatupang Kav 38 Graha Simatupang Tower I Bl D Lt 4,JakartaSurabaya,,Indonesia",
          phone_number: "082687075925",
          website: "www.adeliagarden1001@com",
          profile_picture: null,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vendors", null, {});
  },
};
