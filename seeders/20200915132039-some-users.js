"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Bryce Benda",
        email: "benda@mailmail.nl",
        phone: 0688712728,
      },

      {
        name: "Wout Aarts",
        email: "wout@mailmail.nl",
        phone: 0688713328,
      },
      {
        name: "Bauke vd Velde",
        email: "bauke@mailmail.nl",
        phone: 0611112728,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  },
}
