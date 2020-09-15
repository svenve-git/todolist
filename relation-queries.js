const { user, todoItem, todoList } = require("./models")

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  })

  return lists.map((list) => list.get({ plain: true }))
}

// listsWithUsers().then((lists) => console.log(lists))

/** 1: GET USER BY ID */
async function getUserById() {
  const userById = await user.findByPk(1, { include: [{ model: todoList }] })
  return userById
}

// getUserById().then((user) => console.log(user))

/** 2: GET IMPORTANT TODOS */

async function getImportantToDos() {
  const importantToDo = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  })
  return importantToDo.map((item) => item.get({ plain: true }))
}

// getImportantToDos()
// .then((item) => console.log(item))
// .catch((e) => console.log(e))

/** 3: GET ONE USER WITH LISTS + TODOITEM TASK ATTRIBUTES */

async function getUserAndLists() {
  const userStuff = await user.findByPk(2, {
    include: {
      model: todoList,
      include: { model: todoItem, attributes: ["task"] },
    },
  })
  return userStuff.get({ plain: true })
}

getUserAndLists().then((user) => console.log(user))
