"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })

    await queryInterface.addColumn("todoItems", "todoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todoLists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId")
    await queryInterface.removeColumn("todoItems", "todoListId")
  },
}
