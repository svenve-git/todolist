"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tags", [
      {
        title: "Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Household",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Social",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {})
  },
}
