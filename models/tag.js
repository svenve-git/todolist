"use strict"
const { Model } = require("sequelize")
const itemtag = require("./itemtag")
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.belongsToMany(models.todoItem, {
        through: "itemTags",
        foreignKey: "tagId",
      })
    }
  }
  tag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tag",
    }
  )
  return tag
}
