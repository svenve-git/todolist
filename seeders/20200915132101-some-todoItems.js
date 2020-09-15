"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Make new playlist",
        todoListId: 4,
        deadline: "ASAP",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Order new teacups",
        todoListId: 3,
        important: true,
        deadline: "Whenever",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Dust off old records",
        todoListId: 1,
        important: false,
        deadline: "Sooner rather than later",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Drink coffee with Timo",
        todoListId: 3,
        important: true,
        deadline: "End of the week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {})
  },
}
