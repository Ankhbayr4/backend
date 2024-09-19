const express = require("express");

const { getUsers } = require("../controller/getUsers");

const { getUser } = require("../controller/getUser");
const { createUser } = require("../controller/createUser");
const { deleteUser } = require("../controller/deleteUser");

const UserRouter = express.Router();
UserRouter.get("/", getUsers)
  .get("/:id", getUser)
  .post("/adduser", createUser)
  .delete("/deleteUser/:id", deleteUser);
module.exports = UserRouter;
