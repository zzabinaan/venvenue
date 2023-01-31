"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "venues",
      [
        {
          name: "Adel Garden I",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

          address:
            "Jl Letjen TB Simatupang Kav 38 Graha Simatupang Tower I Bl D Lt 4,JakartaSurabaya,,Indonesia",
          capacity: 300,
          price: 1000000,
          rental_types: "per hour",
          status: "uploaded",
          categoryId: 1,
          locationId: 1,
          vendorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adel Garden II",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

          address:
            "Jl Letjen TB Simatupang Kav 38 Graha Simatupang Tower I Bl D Lt 4,JakartaSurabaya,,Indonesia",
          capacity: 1000,
          price: 4000000,
          rental_types: "per hour",
          status: "uploaded",
          categoryId: 1,
          locationId: 1,
          vendorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("venues", null, {});
  },
};
