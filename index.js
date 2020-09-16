const cors = require("cors")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

const User = require("./models").user
const TodoList = require("./models").todoList

app.use(express.json())
app.use(cors())

app.post("/echo", (req, res) => {
  res.json(req.body)
})

app.listen(PORT, console.log("listening on port:", PORT))

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address")
    } else {
      const user = await User.create(req.body)
      res.json(user)
    }
  } catch (e) {
    next(e)
  }
})

app.get("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id
    // console.log("USER:", user)
    const user = await User.findByPk(userId)
    if (!user) {
      res.status(404).send(`User with id ${userId} was not found`)
    } else {
      res.json(user)
    }
  } catch (e) {
    next(e)
  }
})

app.put("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id
    const userToUpdate = await User.findByPk(userId)
    if (!userToUpdate) {
      res.status(404).send(`User with id ${userId} was not found`)
    } else {
      const updatedUser = await userToUpdate.update(req.body)
      res.json(updatedUser)
    }
  } catch (e) {
    next(e)
  }
})

app.get("/todoLists", async (req, res, next) => {
  try {
    const todoList = await TodoList.findAll()
    res.json(todoList)
  } catch (e) {
    next(e)
  }
})

app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    if (user) {
      const newList = await TodoList.create({ userId, ...req.body })
      res.json(newList)
    } else {
      res.status(404).send(`user with id: ${userId} not found`)
    }
  } catch (e) {
    next(e)
  }
})

app.put("/users/userId/lists/listId", async (req, res, next) => {
  try {
    const listId = req.params.listId
    const listToUpdate = await TodoList.findByPk(listId)
    if (listToUpdate) {
      const updatedList = await listToUpdate.update(req.body)
      res.send(updatedList)
    } else {
      res.status(404).send(`List ${listId} could not be found`)
    }
  } catch (e) {
    next(e)
  }
})

// Delete specific list
app.delete("/users/userId/lists/listId", async (req, res, next) => {
  try {
    const listId = req.params.listId
    const toDelete = await TodoList.findByPk(listId)
    if (toDelete) {
      const deleted = await toDelete.delete()
      res.send(`List ${listId} has been deleted.`)
    } else {
      res.status(404).send(`List ${listId} was not found!`)
    }
  } catch (e) {
    next(e)
  }
})

// Get a user's lists
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId)
    const user = await User.findByPk(userId, {
      include: [TodoList],
    })
    if (user) {
      res.send(user.TodoLists)
    } else {
      res.status(404).send("User not found")
    }
  } catch (e) {
    next(e)
  }
})

// Delete a user's list => find user, then delete user.lists with destroy()
app.delete("/users/:userId/lists/:listId", (req, res, next) => {
  /*..*/
})
// Delete all user's lists => create array? forEach? destroy()
app.delete("/users/:userId/lists", (req, res, next) => {
  /*..*/
})
