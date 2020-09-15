"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Bryce Benda",
        email: "benda@mailmail.nl",
        phone: "0688712728",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Wout Aarts",
        email: "wout@mailmail.nl",
        phone: "0688713328",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bauke vd Velde",
        email: "bauke@mailmail.nl",
        phone: "0611112728",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  },
}
